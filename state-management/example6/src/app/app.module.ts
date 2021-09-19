import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { accountsComponent } from './accounts/accounts.component';
import { accountsReducer } from './accounts/accounts.reducer';

import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { creditReducer } from './credit/credit.reducer';
import { appReducer } from './app.reducers';
import { creditComponent } from './credit/credit.component';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appmodule.router';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [
    AppComponent,
    accountsComponent,
    creditComponent,
    HeaderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
