//PRODUCTS_LOADING
//PRODUCTS_LOADING_SUCCESS
//PRODUCTS_LOADING_FAIL
import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum FetchActions{
    PoductsLoading = "[Product] Loading",
    ProductsLoadingSuccess = "[Product] Loading Success",
    ProductsLoadingFail = "[Product] Loading Fail"
}

export class ProductsLoading implements Action{
    public readonly type = FetchActions.PoductsLoading;
}

export class ProductsLoadingSuccess implements Action{
    public readonly type = FetchActions.ProductsLoadingSuccess;
    public constructor(public products:Product[]){}
}

export class ProductsLoadingFail implements Action{
    public readonly type = FetchActions.ProductsLoadingFail;
    public constructor(public err:string){}
};

export type FetchActionTypes = ProductsLoading | 
                               ProductsLoadingSuccess | 
                               ProductsLoadingFail;







