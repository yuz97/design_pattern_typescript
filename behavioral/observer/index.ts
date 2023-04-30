interface Subject {
   attach(observer: Observer): void;
   detach(observer: Observer): void;
   notify(): void;
}

interface Observer {
   name: string;
   update(subject: Subject): void;
}

class PromoSubject implements Subject {
   public isPromo: Boolean = false;
   private observers: Observer[] = [];

   attach(observer: Observer): void {
      const isExist: Boolean = this.observers.includes(observer);
      if (isExist) {
         return console.log(`observer ${observer.name} sudah ada`);
      }

      this.observers.push(observer);
      console.log(`observer ${observer.name} berhasil didaftarkan`);
   }

   detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);
      if (observerIndex === -1) {
         return console.log(`observer ${observer.name} tidak ditemukan`);
      }

      this.observers.splice(observerIndex, 1);
      console.log(`observer ${observer.name} berhasil dihapus`);
   }

   notify(): void {
      for (const observer of this.observers) {
         observer.update(this);
      }
   }

   setPromo(status: Boolean): void {
      this.isPromo = status;
      this.notify();
   }
}

class Product implements Observer {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   update(subject: Subject): void {
      if (subject instanceof PromoSubject && subject.isPromo == true) {
         console.log(
            `produk ${this.name} telah ditayangkan ke toko online sebagai produk promo`
         );
      }
   }
}

const promo = new PromoSubject();
const baju = new Product("baju");
const baju2 = new Product("baju");

promo.attach(baju);
promo.setPromo(true);
promo.notify();

promo.attach(baju2);
promo.detach(baju2);
promo.notify();
console.log(promo);
