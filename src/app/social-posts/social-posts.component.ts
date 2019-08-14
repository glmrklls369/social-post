import { Component, OnInit } from '@angular/core';
import {Post} from "../interfaces/post"
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
posts: Post[]= [
  {
    title:"this is a title1",
    thought:"this is a thought"
  },
  {
    title:"this is a title2",
    thought:"this is a thought"
  },
  {
    title:"this is a title3",
    thought:"this is a thought"
  },
  {
    title:"this is a title4",
    thought:"this is a thought"
  }
];
deletePost(index: number): void{
  this.posts.splice(index,1)
}
  constructor() { }

  ngOnInit() {
  }

}
