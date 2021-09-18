import { createFeatureSelector, createSelector } from "@ngrx/store";
import counterState from "./counter.state";

const consolidatedSelector = createFeatureSelector<counterState>("counter");

export const selector1 = createSelector(consolidatedSelector,(state)=>{
    return state.counter;
})



export const selector2 = createSelector(consolidatedSelector,(state)=>{
    return state.message;
})
