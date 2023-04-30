class Product {
   name: string;
   price: number;
   weight: number;

   constructor(name: string, price: number, weight: number) {
      this.name = name;
      this.price = price;
      this.weight = weight;
   }
}

interface Handler {
   setNext(handler: Handler): Handler;
   handle(request: any): any;
}

abstract class AbstractProductHandler implements Handler {
   private nextHandler: Handler | null = null;

   public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
   }

   handle(request: any): any {
      if (this.nextHandler) {
         return (this.nextHandler = request);
      }

      return request;
   }
}

// product name
class ProductNameHandler extends AbstractProductHandler {
   handle(request: any): any {
      if (request.name.length > 20) {
         return "nama harus dibawah 20 character";
      }

      return super.handle(request);
   }
}

// product price
class ProductPriceHandler extends AbstractProductHandler {
   handle(request: any): any {
      if (request.price > 10000) {
         return "harga harus dibawah 10 ribu";
      }

      return super.handle(request);
   }
}

class ProductWeightHandler extends AbstractProductHandler {
   handle(request: any): any {
      if (request.weight > 5) {
         return "berat harus dibawah 5 kg";
      }

      return super.handle(request);
   }
}

const product1 = new Product("pulpen", 3000, 4);
const product2 = new Product("bright gas", 1000, 10);

const name1 = new ProductNameHandler();
const price1 = new ProductPriceHandler();
const weight1 = new ProductWeightHandler();

// let a: string = "biawak";
// console.log(a.length);

// metode chaing

name1.setNext(price1).setNext(weight1);
console.log(name1.handle(product1));
console.log(name1.handle(product2));
