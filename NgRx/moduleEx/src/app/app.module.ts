import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreditModule } from './credit/credit.module';
import { DebitModule } from './debit/debit.module';
import { AccountsModule } from './accounts/accounts.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"",loadChildren:()=>import("./credit/credit.module").then(obj=>obj.CreditModule)},
      {path:"debit",loadChildren:()=>import("./debit/debit.module").then(obj=>obj.DebitModule)},
      {path:"accounts",loadChildren:()=>import("./accounts/accounts.module").then(obj=>obj.AccountsModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
