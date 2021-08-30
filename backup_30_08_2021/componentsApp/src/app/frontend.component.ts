import { Component } from "@angular/core";
@Component({
    selector : "frontend",
    templateUrl : "./frontend.component.html"
})
class frontendComponent{
    private var_one:string;
    constructor(){
        this.var_one = "Angular12";
    }
    public frontend():string{
        return this.var_one;
    };
}
export default frontendComponent;