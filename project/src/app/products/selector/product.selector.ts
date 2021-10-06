import { createFeatureSelector, createSelector } from "@ngrx/store";
import Product from "../model/product.model";

export const productSelector = createSelector(createFeatureSelector<Product[]>("products"),(state)=>{
    return state;
})