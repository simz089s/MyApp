import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GoBackendResponse, GoBackendService } from './go-backend.service';

@Component({
  selector: 'go-backend',
  templateUrl: './go-backend.component.html',
  styleUrl: './go-backend.component.css',
  providers: [ GoBackendService ]
})
export class GoBackendComponent {
  title = 'go-backend';

  goResponse!: GoBackendResponse | void;

  constructor(
    // private http: HttpClient,
    private goBackendService: GoBackendService
  ) {}

  callGoBackend() {
    this.goBackendService.getJsonData(new URL('http://localhost:8080')).subscribe({
      next: (response: GoBackendResponse) => {
        this.goResponse = response;
      },

      error: (error: HttpErrorResponse) => {
        console.error(error.message);
        alert(error.message);
      },

      complete: () => { }
    });
  }

  clear() {
    this.goResponse = undefined;
  }
}
