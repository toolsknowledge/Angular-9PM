import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../common/module/common.module";
import { VMSComponent } from "./vms.component";

@NgModule({
    declarations:[VMSComponent],
    imports:[CommonModule,SharedModule,RouterModule.forChild([{path:"",component:VMSComponent}]),HttpClientModule],
    providers:[],
    exports:[VMSComponent]
})
export class VMSModule{}