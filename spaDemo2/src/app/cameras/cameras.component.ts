import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import { productService } from "../common/service/product.service";

@Component({
    selector:"cameras",
    templateUrl:"./cameras.component.html"
})
export class CAMERASComponent{
    camerasList:Array<any> = [];
    constructor(private service:productService,
                private spinner:SpinnerVisibilityService){}
    ngOnInit(){
        this.spinner.show();
        this.service.getProducts("cameras").subscribe((posRes:any)=>{
            this.camerasList = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            this.spinner.hide();
        });
    }
}