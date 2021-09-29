import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"
})
export default class AuthInterceptor{
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        let req1:any;
        if(req.url == environment.baseURL+"/fetch"){
            req1 = req.clone({
                setHeaders:{
                    "token":"ashokit"
                }
            })
        }
        return handler.handle(req1);
    }
}