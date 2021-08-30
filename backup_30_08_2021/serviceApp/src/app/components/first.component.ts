import { Component } from "@angular/core";
import myService from "../services/my.service";
@Component({
    selector : "first",
    templateUrl : "./first.component.html"
})
export default class firstComponent{
     result:any;
     constructor(private obj:myService){}
     ngOnInit(){
         this.result = this.obj.mean();
     }
}