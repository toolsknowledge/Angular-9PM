import { Routes } from "@angular/router";
import { accountsComponent } from "./accounts/accounts.component";
import { AddComponent } from "./add.component";
import { creditComponent } from "./credit/credit.component";

export const appRoutes:Routes = [
    {path:"accounts",component:accountsComponent},
    {path:"credit",component:creditComponent,children:[{path:"add",component:AddComponent}]}
];