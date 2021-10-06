import { createAction, props } from "@ngrx/store";
import Product from "../model/product.model";
import { PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/products.types";

export const ProductsLoading = createAction(PRODUCTS_LOADING);
export const ProductsLoadingSuccess = createAction(PRODUCTS_LOADING_SUCCESS,props<{"products":Product[]}>());
export const ProductsLoadingFail = createAction(PRODUCTS_LOADING_FAIL);