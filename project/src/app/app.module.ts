
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import AuthInterceptor from './common/intreceptor/auth.intreceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    RouterModule.forRoot([{path:"",loadChildren:()=>import("./products/module/product.module").then(m=>m.ProductsModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
