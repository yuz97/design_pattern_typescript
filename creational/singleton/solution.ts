class Me {
   private static instance: Me;
   private firstName = "";
   private lastName = "";

   public static getInstance(): Me {
      if (!Me.instance) {
         Me.instance = new Me();
      }

      return Me.instance;
   }

   getFullName(): string {
      this.firstName = "Adrian";
      this.lastName = "Nuralamsyah";
      return `hello my firstname ${this.firstName} and my lastname ${this.lastName}`;
   }
}

const profile = Me.getInstance();
console.log(profile.getFullName());
