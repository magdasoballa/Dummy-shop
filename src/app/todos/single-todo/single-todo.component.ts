import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todosmodel';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent {
  @Input() todo: Todo;

}
