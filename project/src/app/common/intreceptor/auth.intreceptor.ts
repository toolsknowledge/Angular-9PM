import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class TokenIntreceptor{
    intrecept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        
        if(req.url == "http://localhost:8080/fetch"){
            const req1 = req.clone({
                setHeaders:{
                    token : "ashokit"
                }
            })
            return handler.handle(req1);
        }else{
            return;
        }

      
        
    }
}