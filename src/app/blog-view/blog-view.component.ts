import { Component, OnInit, OnDestroy } from '@angular/core';


// import route related code
import { ActivatedRoute, Router} from "@angular/router";
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {
  ngOnDestroy(){
    console.log("Blog view destroyed");
  }


  constructor(private _route: ActivatedRoute, private router: Router,public blogservice:BlogService) {  
  console.log("constructor is called");
  
  }

public currentBlog;
//called when class is created
  ngOnInit() {
    
    console.log("blogview ngOnInit is Called");
    //getting the blog id from the route

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //calling the function to get the blog with this blogId out of the overall array
    
    this.currentBlog=this.blogservice.getSingleBlogInfo(myBlogId);
  
  console.log(this.currentBlog);
  }


  }

