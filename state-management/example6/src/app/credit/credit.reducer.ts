import { createReducer, on } from "@ngrx/store";

import { addCredit, credit } from "./credit.action";
import { creditState } from "./credit.state";

const _creditReducer = createReducer(creditState,on(credit,(state,action)=>{
    return{
        ...state
    }
}),
on(addCredit,(state,action)=>{
    const newRecord = {name:action.name,type:action.type}
   
    return{
        ...state
    }
}))

export function creditReducer(state,action){
    return _creditReducer(state,action);
}