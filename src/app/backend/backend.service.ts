import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface BackendResponse {
  status: string;
  statusCode: number;
  message: string;
}

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  getJsonData(url: URL): Observable<any> {
    return this.http.get<BackendResponse>(url.href, {responseType: 'json'}).pipe(
    //   map((response: BackendResponse) => <BackendResponse>{message: response.message} as BackendResponse)
    // ).pipe(
      tap({
        next: (data: BackendResponse) => this.log(url.href, data.message),
        error: (error) => this.logError(url.href, error)
      })
    );
  }

  getTextFile(filename: string) {
    // Observable<string> returned by get() if text response specified
    // No need to pass <string> type parameter to get()
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap({
          next: (data) => this.log(filename, data),
          error: (error) => this.logError(filename, error)
        })
      );
  }

  private log(uri: string, data: string) {
    const message = `BackendService requested "${uri}" and got "${data}".`;
    console.log(message);
  }

  private logError(uri: string, error: any) {
    const message = `BackendService failed to request "${uri}"; got error "${error.message}".`;
    console.error(message);
  }
}
