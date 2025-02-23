import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Todo{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private apiUrl='https://jsonplaceholder.typicode.com/todos';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl)
  }

  getCompletedTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      map(todos=>todos.filter(todo=>todo.completed))
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  // Marcar una tarea como completada
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  // Eliminar una tarea
  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
