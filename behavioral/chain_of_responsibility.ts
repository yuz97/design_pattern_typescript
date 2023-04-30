/*

1.nama  < 20
2.harga < 1jt
3.berat < 5 kg

*/

class Product {
   name: string;
   price: number;
   weight: number;

   constructor(name: string, price: number, weight: number) {
      this.name = name;
      this.price = price;
      this.weight = weight;
   }

   validate() {
      if (this.name.length >= 20) {
         return "nama harus dibawah 20 character";
      }
      if (this.price >= 1000) {
         return "harga harus dibawah 1 juta";
      }
      if (this.weight >= 5) {
         return " berat harus dibawah 5kg";
      }
      return this;
   }
}

const product1 = new Product("buku", 15000000, 6);
console.log(product1.validate());
