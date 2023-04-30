class Product {
   name: string;
   price: number;

   constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
   }

   getProduct() {
      return {
         name: this.name,
         price: this.price,
      };
   }
}

const product1 = new Product("susu", 2000);
console.log(product1.getProduct());

const product2 = Object.assign(product1.getProduct(), { tax: 0.25 });
product2.price += 2000 * 0.25;
console.log(product2);
