class Category {
   name: string;
   children: any[] = [];

   constructor(name: string) {
      this.name = name;
   }
}

const comp = new Category("asus");
console.log(comp);

comp.children = [
   (new Category("PC").children = [
      new Category("Case"),
      new Category("Motherboard"),
   ]),
   (new Category("Laptop").children = [new Category("Asus ROG")]),
];

console.log(comp);
