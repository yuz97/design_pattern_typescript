interface Iproduct {
   name: string;
   sell(): void;
}

interface IMediator {
   registerProduct(product: Iproduct): void;
   setAvailableStatus(status: Boolean): void;
   isAvailable(): Boolean;
}

class Product implements Iproduct {
   name: string;
   mediator: IMediator;

   constructor(name: string, mediator: IMediator) {
      this.name = name;
      this.mediator = mediator;
   }
   sell(): void {
      if (this.mediator.isAvailable()) {
         this.mediator.setAvailableStatus(false);
         console.log(`produk ${this.name} berhasil dijual`);
      } else {
         console.log(
            `produk ${this.name} belum dijual harus di daftarkan terlebih dahulu`
         );
      }
   }
}
class ProductMediator implements IMediator {
   product?: Product;
   status: Boolean = false;

   registeredProduct(): void {
      if (this.status) {
         console.log(this.product);
      } else {
         console.log("produk tidak dijual");
      }
   }
   registerProduct(product: Product): void {
      if (this.status) {
         console.log("stock produk masih ada");
      } else {
         this.product = product;
         this.status = true;
         console.log("produk berhasil didaftarkan");
      }
   }

   setAvailableStatus(status: boolean): void {
      this.status = status;
   }
   isAvailable(): Boolean {
      return this.status;
   }
}

const mediator = new ProductMediator();

const product1 = new Product("sabun mandi", mediator);
mediator.registerProduct(product1);
mediator.setAvailableStatus(true);
mediator.registeredProduct();

product1.sell();
mediator.isAvailable();
mediator.registeredProduct();
