import { Component } from "@angular/core";
import CountriesService from "../services/countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector : "countries",
    templateUrl:"./countries.component.html"
})
export default class CountriesComponent{
    result:any;
    constructor(private service:CountriesService){}
    ngOnInit(){
        this.service.getCountries().subscribe((res)=>{
            this.result = res;
        },(err:HttpErrorResponse)=>{
            console.log(err);
        })
    }
}