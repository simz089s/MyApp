import { HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const customJsonInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class CustomJsonInterceptor implements HttpInterceptor {
  constructor() {}
  // constructor(private jsonParser: JsonParser) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ) {
    if (httpRequest.responseType === 'json') {
      return this.handleJsonResponse(httpRequest, next);
    } else {
      return next.handle(httpRequest);
    }
  }

  handleJsonResponse(httpRequest: HttpRequest<any>, next: HttpHandler) {
    return next.handle(httpRequest);
  }
}
