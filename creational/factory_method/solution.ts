interface Logistic {
   qty: number;
   deliver(): void;
}

class Truck implements Logistic {
   public qty: number;

   constructor(qty: number) {
      this.qty = qty;
   }

   deliver(): void {
      console.log(`pengiriman ${this.qty} paket melalui truck`);
   }
}

class Ship implements Logistic {
   public qty: number;

   constructor(qty: number) {
      this.qty = qty;
   }

   deliver(): void {
      console.log(`pengiriman ${this.qty} paket melalui kapal`);
   }
}

type LogisticType = {
   type: string;
   qty: number;
};

interface Factory {
   create(options: LogisticType): Logistic;
}

class LogisticFactory implements Factory {
   public create(options: LogisticType): Logistic {
      if (options.type == "truck") {
         return new Truck(options.qty);
      } else if (options.type == "kapal") {
         return new Ship(options.qty);
      }

      throw new Error("pengiriman tidak ditemukan");
   }
}

const logistic = new LogisticFactory();
// console.log(logistic.create({ type: "deliver by land", qty: 30 })); error
const truck = logistic.create({ type: "truck", qty: 100 });
truck.deliver();

const pesawat = logistic.create({ type: "kapal", qty: 50 });
pesawat.deliver();
