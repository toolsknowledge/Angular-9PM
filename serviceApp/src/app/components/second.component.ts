import { Component } from "@angular/core";
import myService from "../services/my.service";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export default class secondComponent{
    result:any;
    constructor(private obj:myService){}
    ngOnInit(){
        this.result = this.obj.mern();
    }
}