import { createReducer, on } from "@ngrx/store"
import { login } from "./login.actions"


    const login_status = false

const _loginReducer = createReducer(
    login_status,
    on(login,
        (state,action)=>{
            
            if(action.username === "ashokit" && action.password === "ashokit"){
                
                return state=true;
            }else{
               
                return state=false;
            }
}));
export function loginReducer(state,action){
    return _loginReducer(state,action);
}