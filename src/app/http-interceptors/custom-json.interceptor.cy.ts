/// <reference types="Cypress" />

import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { customJsonInterceptor } from './custom-json.interceptor';

describe('jsonInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => customJsonInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    // expect(interceptor).toBeTruthy();
  });
});
