import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import Customers from "../model/customers.model";
import CustomersService from "../services/customers.service";
@Component({
    selector : "customers",
    templateUrl : "./customers.component.html"
})
export default class CustomersComponent{
    result:Customers;
    constructor(private service:CustomersService,
                private spinner:SpinnerVisibilityService){}
    ngOnInit(){
        this.spinner.show();
        this.service.getCustomers().subscribe((posRes)=>{
            this.result = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log( errRes );
            this.spinner.hide();
        })
    }
}