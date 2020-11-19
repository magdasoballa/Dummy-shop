import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'nazwaDowolna';
//   posts: any;
//   subscription: Subscription;

//   constructor(private todoService: TodoService) { }

//   ngOnInit() {
//     this.subscription = this.todoService.fetchPosts().subscribe((data) => {
//       this.posts = data;
//     })   
//   }

// ngOnDestroy() {
//   this.subscription.unsubscribe()
//   console.log(this.subscription);
  
// }
}
