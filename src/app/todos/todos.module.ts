import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from "./todos.component";
import {SingleTodoComponent} from "./single-todo/single-todo.component";
import {TodoListComponent} from "./todo-list/todo-list.component";



@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    SingleTodoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
