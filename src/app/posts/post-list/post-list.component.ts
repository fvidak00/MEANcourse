import { Component, OnDestroy, OnInit } from "@angular/core";
import {Subscription} from "rxjs"

import {Post} from "../post.model"
import {PostsService} from "../post.service"

@Component({
  selector:"app-post-list",
  templateUrl:"./post-list.component.html",
  styleUrls:["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy{
  // posts=[
  //   {title:"1st Post", content:"This is 1st post's content."},
  //   {title:"2nd Post", content:"This is 2nd post's content."},
  //   {title:"3rd Post", content:"This is 3rd post's content."},
  // ]
  posts:Post[]=[]
  private postsSub:Subscription

  constructor(public postsService:PostsService){
  }

  ngOnInit(){
    this.posts=this.postsService.getPosts()
    this.postsSub=this.postsService.getPostUpdateListener()
      .subscribe((posts:Post[])=>{
        this.posts=posts
      })
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe()
  }
}
