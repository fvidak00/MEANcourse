import { Component } from "@angular/core";

@Component({
  selector:"app-post-list",
  templateUrl:"./post-list.component.html",
  styleUrls:["./post-list.component.css"]
})
export class PostListComponent{
  posts=[
    {title:"1st Post", content:"This is 1st post's content."},
    {title:"2nd Post", content:"This is 2nd post's content."},
    {title:"3rd Post", content:"This is 3rd post's content."},
  ]
}
