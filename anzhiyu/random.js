var posts=["2024/05/03/hello-world/","2024/05/03/Markdown语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };