import { Component } from "@angular/core";
@Component({
    selector : "database",
    templateUrl : "./database.component.html"
})
export default class databaseComponent{
    public database():string{
        return "MongoDB";
    }
}