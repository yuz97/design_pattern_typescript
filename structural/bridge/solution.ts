interface Price {
   name: string;
   sellPrice(): string;
}

class Cheap implements Price {
   name = "murah";
   sellPrice(): string {
      return `jual ${this.name}`;
   }
}

class Expensive implements Price {
   name = "mahal";
   sellPrice(): string {
      return `jual ${this.name}`;
   }
}

interface Product {
   name: string;
}

abstract class Product implements Product {
   name: string;
   price: Price;

   constructor(name: string, price: Price) {
      this.name = name;
      this.price = price;
   }

   abstract sell(): void;
}

class Fashion extends Product {
   sell(): void {
      console.log(`jual ${this.name} dengan harga ${this.price.sellPrice()}`);
   }
}

class Computer extends Product {
   sell(): void {
      console.log(`jual ${this.name} dengan harga ${this.price.sellPrice()}`);
   }
}

const fashionMurah = new Fashion("Long Sleeve", new Cheap());
console.log(fashionMurah);
console.log(fashionMurah.sell());

const komputerMahal = new Computer("macbook pro 2023", new Expensive());
console.log(komputerMahal.sell());
