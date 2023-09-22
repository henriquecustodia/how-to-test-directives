import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonDirective } from './directives/my-button.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MyButtonDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
