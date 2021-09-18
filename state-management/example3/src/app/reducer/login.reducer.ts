import { createReducer, on } from "@ngrx/store";
import { login } from "../actions/login.action";

let initialState = {
   login: false
};
  

const _loginReducer = createReducer(initialState,on(login,(state,action)=>{
    if(action.username === "ashokit" && action.password === "ashokit"){
        return {
            login: true
        }
    }else{
        return {
            login: false
        }
    }
    
}))
export function loginReducer(state,action){
    return _loginReducer(state,action);
}


 
  



