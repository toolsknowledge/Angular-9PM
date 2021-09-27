import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "src/app/fetch/model/product.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"
})
export class FetchService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(environment.baseURL+"/fetch");
    }
}