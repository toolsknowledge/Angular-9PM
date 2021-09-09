import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import AccountsComponents from "./accounts.component";


@NgModule({
    declarations:[AccountsComponents],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:AccountsComponents}])],
    providers:[],
    exports:[AccountsComponents]
})
export class AccountsModule{}