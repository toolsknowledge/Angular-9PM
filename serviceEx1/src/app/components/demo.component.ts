import { Component } from "@angular/core";
import FirstService from "../services/first.service";
@Component({
    selector : "demo",
    templateUrl : "./demo.component.html"
})
export default class DemoComponent{
    result:any;
    constructor(private obj:FirstService){}
    ngOnInit(){
        this.result = this.obj.ecommerceFun();
    }
}
