import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pipesEx';
    var_one:string = "angular12";
    var_two:string = "REACTJS";
    var_three:string = "ashok it";
    var_four:number = 100;
    var_five:any = {
      "sub_one" : "Angular12",
      "sub_two" : "NodeJS",
      "sub_three" : "MongoDB"
    };
    var_six:number[] = [10,20,30,40,50];
    var_seven:number = 100.12345;
    var_eight:number = 0.9;
    var_nine:Date = new Date();

    var_ten:any;
    constructor(){
        this.var_ten = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve("Hello");
          },5000);
        })
    }

    var_11:string = "hello";




}
