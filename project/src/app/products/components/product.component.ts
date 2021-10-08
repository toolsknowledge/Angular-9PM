import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    public form: FormGroup;
    public product = {rating:0}
    constructor(private store:Store<any>,
                private fb: FormBuilder){
                    //this.rating3 = 0;
                        this.form = this.fb.group({
                        rating: [3],
                    })
                }



    ngOnInit(){
        this.store.dispatch(ProductsLoading());
        this.store.pipe(select(productSelector)).subscribe((result:any)=>{
            console.log(result);
            const { products } = result; 
            this.products = products;
        })
    }
}