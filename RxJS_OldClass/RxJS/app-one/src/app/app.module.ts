import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForkjoinComponent } from './components/forkjoin.component';
import { MergemapComponent } from './components/mergemap.component';
import { ConcatmapComponent } from './components/concatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    ForkjoinComponent,
    MergemapComponent,
    ConcatmapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ConcatmapComponent]
})
export class AppModule { }
