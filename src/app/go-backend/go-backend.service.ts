import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable()
export class GoBackendService {
  constructor(private http: HttpClient) {}

  getJSON(url: URL) {
    return this.http.get(url.href).pipe(tap({
      next: (data) => this.log(url.href, data.toString()),
      error: (error) => this.logError(url.href, error)
    }));
  }

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
        {
          next: (data) => this.log(filename, data),
          error: (error) => this.logError(filename, error)
        }
        )
      );
  }

  private log(uri: string, data: string) {
    const message = `GoBackendService requested "${uri}" and got "${data}".`;
    console.log(message);
    
  }

  private logError(uri: string, error: any) {
    const message = `GoBackendService failed to request "${uri}"; got error "${error.message}".`;
    console.error(message);
  }
}
