import { FetchActions, FetchActionTypes } from "..";
import { Product } from "../model/product.model";



export interface IState{
    loading:boolean;
    products:Product[];
    error:string;
}

export const initialState:IState = {
    loading:false,
    products:[],
    error:""
}

export function FetchReducer(state=initialState,action:FetchActionTypes | any):IState{
    switch(action.type){
        case FetchActions.PoductsLoading:
            return{
                ...state,
                loading:false,
                error:"",
                products:[]
            }
        case FetchActions.ProductsLoadingSuccess:
            return{
                ...state,
                loading:true,
                error:"",
                products:action.products
            }
        case FetchActions.ProductsLoadingFail:
            return{
                ...state,
                loading:true,
                error:action.err,
                products:[]
            }
            
        default:
            return state;
    }
}