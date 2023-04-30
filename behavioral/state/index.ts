interface IProduct {
   name: string;
   saveAsFeaturedProduct(): void;
}

class FeatureProduct {
   private state: IProduct;

   constructor(state: IProduct) {
      this.state = state;
   }

   setFeaturedProduct(state: IProduct): void {
      this.state = state;
   }

   getFeaturedProduct(): void {
      this.state;
   }

   publish(): void {
      this.state.saveAsFeaturedProduct();
   }
}

class FashionProduct implements IProduct {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   saveAsFeaturedProduct(): void {
      console.log(
         `produk ${this.name} berhasil ditambahkan sebagai produk utama`
      );
   }
}

class ElectronicProduct implements IProduct {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   saveAsFeaturedProduct(): void {
      console.log(
         `produk ${this.name} berhasil ditambahkan sebagai produk utama`
      );
   }
}

const boxer = new FashionProduct("boxer");
// boxer.name = "navy boxer sword";
// boxer.saveAsFeaturedProduct();

const celanaPendek = new FashionProduct("celana pendek");

const produk = new FeatureProduct(boxer);
produk.getFeaturedProduct();
produk.publish();

produk.setFeaturedProduct(celanaPendek);
produk.publish();
produk.getFeaturedProduct();
console.log(produk);
