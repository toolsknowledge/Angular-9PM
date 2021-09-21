import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
        {path:"cameras",loadChildren:()=>import("./cameras/cameras.module").then(m=>m.CAMERASModule)},
        {path:"vms",loadChildren:()=>import("./vms/vms.module").then(m=>m.VMSModule)},
        {path:"acs",loadChildren:()=>import("./acs/module/acs.module").then(m=>m.ACSModule)}
    ])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
