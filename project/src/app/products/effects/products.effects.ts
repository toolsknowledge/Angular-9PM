import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap,map } from "rxjs/operators";
import { ProductsLoading, ProductsLoadingSuccess } from "../actions/product.actions";
import Product from "../model/product.model";
import ProductService from "../services/product.service";


@Injectable({
    providedIn:"root"
})

export class ProductsEffects{
    constructor(private actions$:Actions,
                private service:ProductService){}
    public products = createEffect(()=>{
       return this.actions$.pipe(
           ofType(ProductsLoading),
           mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
                return ProductsLoadingSuccess({"products":posRes})
            })))
       )
    })
}