import { Component } from '@angular/core';
import { About } from "../about/about";
import { Share } from '../share';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
   todoText="";
   
    constructor(public todo : Share){}

    addTodo(){
      this.todo.addTodo(this.todoText)
      this.todoText = "";
    }
  theme: string = 'light'; // საწყისი თემა

 
}



