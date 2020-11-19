import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';
import {Todo} from '../models/todosmodel'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent{
  todos$: Observable<Todo[]> = this.todoService.fetchTodos()

  subscription: Subscription;

  constructor(private todoService: TodoService) { }

//   ngOnInit() {
//     this.subscription = this.todoService.fetchTodos().subscribe((data) => {
//       this.todos = data;
//     })
//   }

//   ngOnDestroy() {
//   this.subscription.unsubscribe()
//   console.log('ON destroy');

// }

}
