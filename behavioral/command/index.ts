class BlogService {
   save() {}
   update() {}
   delete() {}
   getPost() {}
   titleToSlug() {}
   getFeaturedPost() {}
   getMonotizedPost() {}
}

interface BlogPost {
   execute(params: any): any;
}

class SaveBlogPost implements BlogPost {
   execute() {
      const blog = new BlogService();
      blog.titleToSlug();
      blog.getFeaturedPost();
   }
}

new SaveBlogPost().execute();
