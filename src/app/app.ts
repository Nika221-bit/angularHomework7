import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Home, About,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('workout');

  theme : string = 'light'; 

   changeTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else if (this.theme === 'dark') {
      this.theme = 'colorful';
    } else {
      this.theme = 'light';
    }
    
  } 
    getThemeEmoji(): string {
    if (this.theme === 'light') return '🌞';
    if (this.theme === 'dark') return '🌙';
    return '🎨';}
}
