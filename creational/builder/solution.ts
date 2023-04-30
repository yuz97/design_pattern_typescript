class User {
   //   cara 1
   public name: string = "";
   public username: string = "";
   public password: string = "";
   public email: string = "";
   public phone: string = "";

   getDetails() {
      return `${this.name} username = ${this.username}`;
   }
}

class UserBuilder {
   private user: User;

   constructor() {
      this.user = new User();
   }

   setName(value: string) {
      this.user.name = value;
      return this;
   }

   setUsername(value: string) {
      this.user.username = value;
      return this;
   }

   setEmail(value: string) {
      this.user.email = value;
      return this;
   }

   setPassword(value: string) {
      this.user.password = value;
      return this;
   }

   setPhone(value: string) {
      this.user.phone = value;
      return this;
   }

   build() {
      return this.user;
   }
}

// # cara 1;

const user1 = new UserBuilder()
   .setName("yusri")
   .setUsername("yus")
   .setEmail("yus@gmail.com")
   .setPassword("rahasia")
   .setPhone("1234")
   .build();

console.log(user1);

// # cara 2;
