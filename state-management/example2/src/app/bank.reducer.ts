import { createReducer, on } from "@ngrx/store";
import { deposit, withdraw } from "./bank.actions";

const initialState = 10000;
const _bankReducer = createReducer(
    initialState,
    on(deposit,(state)=>{ return state+2000 }),
    on(withdraw, (state)=>{ return state-1000 })
);

export function bankReducer(state,action){
    return _bankReducer(state,action);
}