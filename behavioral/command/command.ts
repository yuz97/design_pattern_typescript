interface BlogPost {
   execute(params: any): any;
}

class BLogUtility {
   static titleToSlug() {}
   static getFeaturedPost() {}
   static getMonotizedPost() {}
   static dateToHumanize() {}
}

class SaveBlogPost implements BlogPost {
   execute() {
      BLogUtility.titleToSlug();
      this.save();
   }

   protected save() {
      //simpan ke db
   }
}

class UpdateBlogPost implements BlogPost {
   execute(params: any) {
      //update ke db
   }
}

class GetBlogPost implements BlogPost {
   execute(singlePost: boolean) {
      BLogUtility.dateToHumanize();
   }

   // if(singlePost = true) {
   //         this.getPost();
   //     } else {
   //     this.getPosts();
   // }

   //     getPost(){};
   //     getPosts(){};
}

new SaveBlogPost().execute();
