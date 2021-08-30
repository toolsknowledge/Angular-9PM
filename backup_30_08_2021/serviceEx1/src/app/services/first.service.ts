import { Injectable } from "@angular/core";
import SecondService from "./second.service";
@Injectable({
    providedIn:"root"
})
export default class FirstService{
    constructor(private obj:SecondService){}
    public ecommerceFun():any{
        return this.obj.myFun();
    }
}