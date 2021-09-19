import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CreditModel } from "./credit.model";

const consolidatedState = createFeatureSelector<CreditModel[]>("credit");

export const creditSelector = createSelector(consolidatedState,(state)=>{
    return state;
})