import { createReducer, on } from "@ngrx/store";
import { accounts } from "./accounts.action";
import { accountsState } from "./accounts.state";

const _accointsReducer = createReducer(accountsState, on(accounts,(state,action)=>{
    return{
        ...state
    }
}))

export function accountsReducer(state,action){
    return _accointsReducer(state,action);
}