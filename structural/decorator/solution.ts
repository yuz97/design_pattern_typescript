interface IProduct {
   getProduct(): any;
}

class Product implements IProduct {
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

abstract class ProductDecorator implements IProduct {
   protected product: Product;
   // protected tax: number;

   constructor(product: Product) {
      this.product = product;
      // this.tax = tax;
   }

   abstract getProduct(): any;
}

class ImportDecorator extends ProductDecorator {
   getProduct() {
      return {
         name: this.product.name,
         price: this.product.price + 2000,
         tax: 1000,
      };
   }
}

class ExportDecorator extends ProductDecorator {
   getProduct() {
      return {
         name: this.product.name,
         price: this.product.price + 4000,
         tax: 500,
      };
   }
}

const product1 = new Product("susu", 2000);
console.log(product1.getProduct());

const productImpor = new ImportDecorator(product1);
console.log(productImpor.getProduct());

const productExpor = new ExportDecorator(product1);
console.log(productExpor.getProduct());
