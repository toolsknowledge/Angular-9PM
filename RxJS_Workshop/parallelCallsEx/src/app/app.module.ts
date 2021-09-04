import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatchErrorComponent } from './catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CatchErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CatchErrorComponent]
})
export class AppModule { }
