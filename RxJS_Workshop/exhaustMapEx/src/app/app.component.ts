import { Component } from '@angular/core';
//rest api call
import { HttpClient } from "@angular/common/http";
import { delay,exhaustMap,map, retry } from "rxjs/operators";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exhaustMapEx';
  btnSub:Subject<any> = new Subject();

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.btnSub.pipe(exhaustMap(()=> this.clickMe())).subscribe(console.log);
  }


  clickMe(){
     return this.http.get("https://restcountries.eu/rest/v2/all")
         .pipe(map((posRes:any)=>{
            return posRes.map((element,index)=>{
              return {
                "name":element.name,
                "flag":element.flag
              }
            })
         }),delay(5000));
         
  }

}
