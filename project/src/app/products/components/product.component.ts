import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ProductsLoading } from "../actions/product.actions";
import Product from "../model/product.model";
import { productSelector } from "../selector/product.selector";

@Component({
    selector:"fetch",
    templateUrl:"./product.component.html"
})
export default class ProductsComponent{
    public products:Product[] = [];
    constructor(private store:Store<any>){}

    ngOnInit(){
        this.store.dispatch(ProductsLoading());
        this.store.pipe(select(productSelector)).subscribe((result:Product[])=>{
            this.products = result;
        })
    }
}