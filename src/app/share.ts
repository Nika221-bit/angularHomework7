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
  editTodo(index:number,newTodo:string):void{
    if(index >= 0 && index < this.todos.length && newTodo.trim()){
       this.todos[index]=newTodo.trim();
    }
  }
 

}
