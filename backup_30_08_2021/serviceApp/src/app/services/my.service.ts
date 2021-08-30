import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export default class myService{
     public mean():any{
         return {"sub":"MEAN Stack"};
     };
     public mern():any{
         return {"sub":"MERN Stack"};
     }
}