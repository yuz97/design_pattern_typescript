class Me {
   //    firstName = "Albern";
   //    lastName = "Khawarizmi";
   firstName = "firstname";
   lastName = "lastname";

   getFullName(): string {
      return `hello my firstname ${this.firstName} and my lastname ${this.lastName}`;
   }
}

const name = new Me();
console.log(name.getFullName());

const name2 = new Me();
console.log(name2.getFullName());

console.log(name == name2);
