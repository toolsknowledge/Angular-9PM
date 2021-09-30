import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { FetchService } from "../services/fetch.service";
import * as allActions from "../.";
import { mergeMap,map, catchError } from "rxjs/operators";
import { Product } from "../model/product.model";
@Injectable({
    providedIn:"root"
})
export default class FetchEffects{
    constructor(private service:FetchService,
                private actions:Actions){}

    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(allActions.FetchActions.PoductsLoading),
        mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new allActions.ProductsLoadingSuccess(posRes)
        }),catchError((err)=> of(new allActions.ProductsLoadingFail("Network Error")))))
    )
}