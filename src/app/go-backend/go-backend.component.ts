import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GoBackendService } from './go-backend.service';

@Component({
  selector: 'go-backend',
  templateUrl: './go-backend.component.html',
  styleUrl: './go-backend.component.css',
  providers: [ GoBackendService ]
})
export class GoBackendComponent {
  title = 'go-backend';

  goResponse!: Object | void;

  constructor(private http: HttpClient, private goBackendService: GoBackendService) {}

  callGoBackend() {
    this.goBackendService.getJSON(new URL('http://localhost:8080')).subscribe({
      next: (response) => {
        console.log(response);
        alert(response);
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
