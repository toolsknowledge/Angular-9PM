import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import DebitComponent from "./debit.component";

@NgModule({
    declarations:[DebitComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:DebitComponent}])],
    providers:[],
    exports:[DebitComponent]
})
export class DebitModule{}