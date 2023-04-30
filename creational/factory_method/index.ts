class Truck {
   private qty: number;

   constructor(qty: number) {
      this.qty = qty;
   }

   deliver(): void {
      console.log(`kirim ${this.qty} paket menggunakan truck`);
   }
}

const truck = new Truck(100);
console.log(truck);
truck.deliver();

class Ship {
   private qty: number;

   constructor(qty: number) {
      this.qty = qty;
   }

   deliver(): void {
      console.log(`kirim ${this.qty} paket menggunakan kapal`);
   }
}

let type = "deliver by land";
if (type) {
   new Truck(100);
} else if (type == "deliver by sea") {
   new Ship(80);
} else {
   console.log("tidak ada pengiriman");
}
