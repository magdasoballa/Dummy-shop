import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/postsmodel'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent  {
@Input() posts: Post[];
}
