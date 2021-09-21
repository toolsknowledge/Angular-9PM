import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import Product from "src/app/common/model/product.model";
import { productService } from "src/app/common/service/product.service";

@Component({
    selector:"acs",
    templateUrl:"./acs.component.html"
})
export class ACSComponent{
    acsList:Product[] = [];


    constructor(private service:productService){}

    ngOnInit(){
        this.service.getProducts("acs").subscribe((posRes:Product[])=>{
            this.acsList = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        })
    }
}