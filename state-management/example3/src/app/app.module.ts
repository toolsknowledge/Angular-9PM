import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { loginReducer } from './reducer/login.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({login:loginReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
