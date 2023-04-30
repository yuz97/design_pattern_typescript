// name  | brand
// ---------------
// mobil | Toyota
// besi  | -
// roda  | -

interface Basedata {
   getData(): {
      name: string;
      brand: string;
   };
}

interface IProduct extends Basedata {
   name: string;
   brand: string;
}

interface IMaterial {
   name: string;
   qty: number;
}

class Product implements IProduct {
   public name: string;
   public brand: string;

   constructor(name: string, brand: string) {
      this.name = name;
      this.brand = brand;
   }

   getData() {
      return {
         name: this.name,
         brand: this.brand,
      };
   }
}

class Material implements IMaterial {
   public name: string;
   public qty: number;

   constructor(name: string, qty: number) {
      this.name = name;
      this.qty = qty;
   }

   getData() {
      return {
         name: this.name,
         qty: this.qty,
      };
   }
}

const list: any[] = [];

const product = new Product("mobil", "Toyota");
list.push(product.getData());
// console.log(list);

const material = new Material("baja", 10);
list.push(material.getData());

const material2 = new Material("roda", 4);
list.push(material2.getData());

console.log(list);

// cara 1

class MaterialAdapter implements Basedata {
   private adaptee: Material;

   constructor(adaptee: Material) {
      this.adaptee = adaptee;
   }

   getData() {
      return {
         name: this.adaptee.name,
         brand: "",
      };
   }
}

const list2: any[] = [];

const material21 = new MaterialAdapter(new Material("baja", 10));
list2.push(material21.getData());
console.log(list2);

// cara 2
enum AdapterType {
   PRODUCT,
   MATERIAL,
}

class DataAdapter implements Basedata {
   public name: string;
   public brand: string;
   public qty: number;
   public type: AdapterType;

   constructor({ name = "", brand = "", qty = 0 } = {}, type: AdapterType) {
      this.name = name;
      this.brand = brand;
      this.qty = qty;
      this.type = type;
   }

   getData() {
      if (this.type == AdapterType.PRODUCT) {
         const product = new Product(this.name, this.brand);
         return {
            name: product.name,
            brand: product.brand,
         };
      } else if (this.type == AdapterType.MATERIAL) {
         const material = new Material(this.name, this.qty);
         return {
            name: material.name,
            qty: material.qty,
         };
      }

      return {
         name: "",
         brand: "",
      };
   }
}

const list3: any[] = [];
const data1 = new DataAdapter(
   { name: "mobil", brand: " honda jazz" },
   AdapterType.PRODUCT
);
list3.push(data1.getData());
