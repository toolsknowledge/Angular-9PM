import { Component } from "@angular/core";
import {  Store } from "@ngrx/store";
import { CreditModel } from "./credit.model";
import { creditSelector } from "./credit.selector";

@Component({
    selector:"credit",
    templateUrl:"./credit.component.html"
})

export class creditComponent{
    
    arr:CreditModel[] = [];

    constructor(private store:Store<CreditModel[]>){}

    
 
    _subscription(){
        this.store.select(creditSelector).subscribe((posRes)=>{
            this.arr = posRes;
        })
    }

    ngOnInit(){
        this._subscription();
    }


}