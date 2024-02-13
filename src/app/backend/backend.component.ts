import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BackendResponse, BackendService } from './backend.service';

@Component({
  selector: 'backend',
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css',
  providers: [ BackendService ]
})
export class BackendComponent {
  title = 'backend';

  response!: BackendResponse | void;

  constructor(
    // private http: HttpClient,
    private backendService: BackendService
  ) {}

  callBackend() {
    this.backendService.getJsonData(new URL('http://localhost:8080')).subscribe({
      next: (response: BackendResponse) => {
        this.response = response;
      },

      error: (error: HttpErrorResponse) => {
        console.error(error.message);
        alert(error.message);
      },

      complete: () => { }
    });
  }

  clear() {
    this.response = undefined;
  }
}
