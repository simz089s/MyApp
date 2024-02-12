import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoBackendModule } from './go-backend/go-backend.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GoBackendModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
}
