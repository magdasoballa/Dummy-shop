import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/postsmodel';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
@Input() post: Post;
  
}
