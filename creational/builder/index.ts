class User {
   private name: string;
   private username: string;
   private password: number;
   private email: string;
   private phone: string;

   constructor(
      name: string,
      username: string,
      password: number,
      email: string,
      phone: string
   ) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
   }
}

const user1 = new User("Yus", "yusri", 1234, "yus@gmail.com", "08140837");
console.log(user1);
