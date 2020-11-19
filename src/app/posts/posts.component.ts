import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';
import {Post} from '../models/postsmodel';


@Component({
  selector: 'app-first',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  subscription: Subscription;
  posts: Post[];
  

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.subscription = this.todoService.fetchPosts().subscribe(data => {
      console.log(data);
      
      this.posts = data;
    })   
  }

  ngOnDestroy() {
  this.subscription.unsubscribe()
  console.log('ON destroy');
  
}

}
