import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "../reducer/fetch.reducer";

const fetchSelector = createSelector(createFeatureSelector<IState>("fetch"),(state:IState)=>{
    return state;
});

export default fetchSelector;