import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { ParallelComponent } from './parallel.component';
import { ZipComponent } from './zip.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ParallelComponent,
    ZipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ZipComponent]
})
export class AppModule { }
