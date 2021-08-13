import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Customers from "../model/customers.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"
})
export default class CustomersService{
     constructor(private http:HttpClient){}
     public getCustomers():Observable<Customers>{
         return this.http.get<Customers>(environment.CUSTOMERS);
     }
}