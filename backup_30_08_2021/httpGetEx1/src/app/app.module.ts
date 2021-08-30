import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import CustomersComponent from './components/customers.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})
export class AppModule { }