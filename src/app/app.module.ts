// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoBackendComponent } from './go-backend/go-backend.component';

@NgModule({
  imports:      [
                  BrowserModule,
                  HttpClientModule
                ],
  declarations: [
                  AppComponent,
                  GoBackendComponent
                ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
