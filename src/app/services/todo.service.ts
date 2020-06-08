import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo_url: string = 'https://jsonplaceholder.typicode.com/todos';
  todos_limit = '?_limit=10';

  constructor(private http: HttpClient) { }

  //get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todo_url}${this.todos_limit}`)
  }

  //toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(this.todo_url, todo, httpOptions);

  }
}
