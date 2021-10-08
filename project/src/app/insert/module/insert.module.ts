import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InsertComponent } from "../components/insert.component";

@NgModule({
    declarations:[InsertComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:InsertComponent}])],
    providers:[],
    exports:[InsertComponent]
})
export class InsertModule{}