import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Home, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('workout');
}
