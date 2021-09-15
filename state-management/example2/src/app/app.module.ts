import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { bankReducer } from './bank.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule.forRoot({bank:bankReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
