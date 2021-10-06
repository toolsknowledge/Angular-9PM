  
import { createReducer, on } from "@ngrx/store";
import { ProductsLoadingSuccess,ProductsLoading,ProductsLoadingFail } from "../actions/product.actions";
import Product from "../model/product.model";

export interface ProductState{
    products:Product[]
}

export const initialState:ProductState = {
    products:[]
}

export function ProductsReducer(state:any,action:any){
    return _productReducer(state,action);
}

const _productReducer = createReducer(initialState,on(ProductsLoading,(state,action)=>{
    return{
        ...state
    }
}),on(ProductsLoadingSuccess,(state,action)=>{
    return{
        ...state,
        products:action.products
    }
}),on(ProductsLoadingFail,(state,action)=>{
    return{
        ...state
    }
}))