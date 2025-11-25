import { Component } from '@angular/core';
import { HeaderComponent } from './header-component/header.component';
import { UserComponentComponent } from './user-component/user-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
