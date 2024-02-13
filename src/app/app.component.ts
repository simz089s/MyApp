import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoBackendModule as BackendModule } from './backend/backend.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BackendModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
}
