import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DebounceDirective } from './debounce.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  HttpClientModule, NgxPaginationModule],
  declarations: [ AppComponent, DebounceDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
