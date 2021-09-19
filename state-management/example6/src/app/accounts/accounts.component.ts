import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import AccountsModel from "./accounts.model";
import { accountsSelector } from "./accounts.selector";

@Component({
    selector:"accounts",
    templateUrl:"./accounts.component.html"
})

export class accountsComponent{
    accounts:AccountsModel[] = [];

    constructor(private store:Store<AccountsModel[]>){}

    _subscription(){
        this.store.select(accountsSelector).subscribe((posRes)=>{
            this.accounts = posRes;
        })
    }

    ngOnInit(){
        this._subscription();
    }

}