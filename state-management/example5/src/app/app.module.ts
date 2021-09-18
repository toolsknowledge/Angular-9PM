import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Child2Component } from './child2.component';
import { counterReducer } from './counter.reducer';
import { Child1Component } from './child1.component';
import { ParentComponent } from './parent.component';
import { Child3Component } from './child3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Child2Component,
    Child1Component,
    ParentComponent,
    Child3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({"counter":counterReducer})
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
