interface Icovid {
   getData(): Promise<{
      confirmed: number;
      recovered: number;
      deaths: number;
   }>;
}

let tempData: any = null;

class Covid implements Icovid {
   country: string;

   constructor(country: string) {
      this.country = country;
   }

   async getData() {
      const res: any = await fetch(
         `https://covid19.mathdro.id/api/countries/${this.country}`
      );
      const data: any = await res.json();

      tempData = data;

      return {
         confirmed: data.confirmed.value,
         recovered: data.recovered.value,
         deaths: data.deaths.value,
      };
   }
}

class ProxyCovid implements Icovid {
   covid: Covid;

   constructor(covid: Covid) {
      this.covid = covid;
   }

   async getData() {
      if (tempData) {
         console.log("data didapatkan dari database");
         return {
            confirmed: tempData.confirmed.value,
            recovered: tempData.recovered.value,
            deaths: tempData.deaths.value,
         };
      }

      console.log("data di dapatkan dari api covid19");
      return this.covid.getData();
   }
}

const getCovid = async () => {
   const covid1 = new ProxyCovid(new Covid("id"));
   console.log(await covid1.getData());

   const covid2 = new ProxyCovid(new Covid("id"));
   console.log(await covid2.getData());
};

getCovid();
