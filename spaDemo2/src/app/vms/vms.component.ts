import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { productService } from "../common/service/product.service";

@Component({
    selector:"vms",
    templateUrl:"./vms.component.html"
})
export class VMSComponent{
    vmsList:Array<any> = [];
    constructor(private service:productService){}
    ngOnInit(){
        this.service.getProducts("wms").subscribe((posRes)=>{
            this.vmsList = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    }
}