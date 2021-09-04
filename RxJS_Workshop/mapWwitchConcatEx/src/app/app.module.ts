import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareReplayComponent } from './share-replay.component';
import { TakeComponent } from './take.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareReplayComponent,
    TakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TakeComponent]
})
export class AppModule { }
