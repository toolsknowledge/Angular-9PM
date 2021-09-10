import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { CreditComponent } from './credit.component';
import { DebitComponent } from './debit.component';
import { AccountsComponent } from './accounts.component';
import { RouterModule } from '@angular/router';
import { VisaComponent } from './visa.component';
import { RupeComponent } from './rupe.component';
import { CurrentComponent } from './current.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    CreditComponent,
    DebitComponent,
    AccountsComponent,
    VisaComponent,
    RupeComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {path:"",component:CreditComponent,
        children:[{path:"visa",component:VisaComponent}]},
       {path:"debit",component:DebitComponent,
        children:[{path:"rupe",component:RupeComponent}]},
       {path:"accounts",component:AccountsComponent,
        children:[{path:"current",component:CurrentComponent}]}
    ])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
