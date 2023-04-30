class User {
   public name: string;
   public username: string;
   public email: string;
   public password: string;
   public phone: string;

   constructor(
      name: string,
      username: string,
      email: string,
      password: string,
      phone: string
   ) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
      this.phone = phone;
   }

   public clone(): this {
      const clone = Object.assign({}, this);
      return clone;
   }
}

const user1 = new User("yus", "yusri", "yus@gmail.com", "abcs", "0934");
console.log(user1.clone());

const user2 = user1.clone();
user2.name = "Albern";
console.log(user2);
