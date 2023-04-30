interface Icovid {
   getData(): Promise<{
      confirmed: number;
      recovered: number;
      deaths: number;
   }>;
}

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

      return {
         confirmed: data.confirmed.value,
         recovered: data.recovered.value,
         deaths: data.deaths.value,
      };
   }
}

const covid = new Covid("id");
console.log(await covid.getData());
