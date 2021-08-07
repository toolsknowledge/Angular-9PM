import { Component } from "@angular/core";

@Component({
    selector : "mean",
    templateUrl : "./mean.component.html"
})
export default class meanComponent{
    public mean():string{
        return "MEAN Stack Development Means......"
    }
}