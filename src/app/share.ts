import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Share {
  todos:string[]=[];
 
  addTodo(todo: string): void {
    if (todo.trim()) {
      this.todos.push(todo.trim());
    }
  }

  getTodo():any[]{
        return this.todos
  }

  deleteTodo(index: number): void {
  if (index >= 0 && index < this.todos.length) {
    this.todos.splice(index, 1);
  }
}

  deleteAll():void{
    this.todos = [];
  }
}
