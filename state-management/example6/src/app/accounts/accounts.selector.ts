import { createFeatureSelector, createSelector } from "@ngrx/store";
import AccountsModel from "./accounts.model";
const consolidatedState = createFeatureSelector<AccountsModel[]>("accounts");
export const accountsSelector = createSelector(consolidatedState,(state)=>{
    return state;
})