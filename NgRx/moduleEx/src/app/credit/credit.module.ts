import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreditComponent } from "./credit.component";
@NgModule({
    declarations:[CreditComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:CreditComponent}])],
    providers:[],
    exports:[CreditComponent]
})
export class CreditModule{}