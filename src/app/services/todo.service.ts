import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Post } from '../models/postsmodel';
import {Todo} from '../models/todosmodel'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) { }


  fetchPosts (): Observable<Post[]>{

    const action = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Post[]>(action);
  }

  fetchTodos (): Observable<Todo[]> {
    const link = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(link)
  }
}
