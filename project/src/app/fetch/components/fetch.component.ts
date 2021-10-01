import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IState } from "../reducer/fetch.reducer";
import * as allActions from "../.";
import fetchSelector from "../selector/fetch.selector";
import { Product } from "../model/product.model";

@Component({
    selector:"fetch",
    templateUrl:"./fetch.component.html"
})
export default class FetchComponent{
    loading:boolean;
    products:Product[];
    error:string;
    
    constructor(private store:Store<IState>){
        this.loading = false;
        this.products = [];
        this.error = "";
    }
    ngOnInit(){
        this.store.dispatch(new allActions.ProductsLoading());

        const result = this.store.pipe(select(fetchSelector));
        
        result.subscribe((posRes)=>{
            console.log(posRes);
            this.loading = posRes.loading;
            this.products = posRes.products;
            this.error = posRes.error;
        })
    
    }

};