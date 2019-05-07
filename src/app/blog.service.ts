import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 public currentBlog;


  constructor() {

    console.log("Service constructor is called")
   }
//declare dummt blog variable
public allBlogs = [
  {
    "blogID": "1",
    "blogId": "1",
    "title": "BENEDICT CUMBERPATCH IS GAY",
    "description": "gay description",
    "date": "26-10-1998",
    "author": "LENZIL GONSALVES",
    

  },
  {
    "blogID": "2",
    "blogId": "2",
    "title": "GAY",
    "description": "gay description",
    "date": "26-10-1998",
    "author": "ZAC EFRON",

  },
  {
    "blogID": "3",
    "blogId": "3",
    "title": "GAY",
    "description": "gay description",
    "date": "26-10-1998",
    "author": "ZAC EFRON",

  },
  {
    "blogID": "4",
    "blogId": "4",
    "title": "GAY",
    "description": "gay description",
    "date": "26-10-1998",
    "author": "ZAC EFRON",

  }
]
//method to return all blogs
  public getAllBlogs(): any {
    return this.allBlogs;
   
  }

//mrthod to get a particular blog
  public getSingleBlogInfo(currentBlogID): any{

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogID){
        this.currentBlog = blog;
        console.log(this.currentBlog);
        return this.currentBlog;
      }
    }
}}
