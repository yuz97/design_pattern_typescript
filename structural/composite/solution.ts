abstract class Category {
   children: Category[] = [];
   parent: Category | null;
   name: string;

   constructor(name: string, parent: Category | null) {
      this.name = name;
      this.parent = parent;
   }

   setParent(parent: Category | null) {
      this.parent = parent;
   }

   getParent(): Category | null {
      return this.parent;
   }

   isComposite(): boolean {
      return false;
   }

   abstract getName(): string;
}

class Product extends Category {
   getName(): string {
      return this.name;
   }
}

class CategoryComposite extends Category {
   constructor(name: string) {
      super(name, parent);
      this.name = name;
   }

   add(category: Category): void {
      this.children.push(category);
      category.setParent(category);
   }

   remove(category: Category): void {
      const categoryIndex = this.children.indexOf(category);
      this.children.splice(categoryIndex, 1);

      category.setParent(null);
   }

   isComposite(): boolean {
      return true;
   }

   getName(): string {
      return this.name;
   }
}

const category = new CategoryComposite("Category");

const computer = new CategoryComposite("Computer");
const fashion = new CategoryComposite("fashion");
const laptop = new CategoryComposite("laptpp");
const casing = new CategoryComposite("casing");
const motherborad = new CategoryComposite("motherboard");
const HDD = new CategoryComposite("HDD");

category.add(computer);
category.add(fashion);

computer.add(laptop);
computer.add(casing);
computer.add(motherborad);
computer.add(HDD);

console.log(category);

const print = (composite: Category): void => {
   console.log(`kategori ${composite.getName()}`);

   composite.children.forEach((item) => {
      if (item.isComposite() && item.children.length) {
         print(item);
      } else {
         console.log(`product ${item.getName()}`);
      }
   });
};

print(category);
