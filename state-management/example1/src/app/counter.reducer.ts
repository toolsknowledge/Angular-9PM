import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset1 } from "./counter.actions";

const initialState = 1;

const _counterReducer = createReducer(
    initialState,
    on(increment,(state)=>{ return state+1 }),
    on(decrement,(state)=>{ return state-1 }),
    on(reset1,(state)=>{ return 0 })
);

export function counterReducer(state,action){
    return _counterReducer(state,action);
};