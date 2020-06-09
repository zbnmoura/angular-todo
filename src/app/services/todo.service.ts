import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todo_url}${this.todos_limit}`)
  };

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todo_url}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  };

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todo_url}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  };

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todo_url, todo, httpOptions);
  };
}
