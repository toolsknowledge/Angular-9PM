import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { delay, retry, retryWhen, scan } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'retryEx';

    constructor(private http:HttpClient){}

    myFun(){
        /*
          this.http.get("https://restcountries.eu/rest/v2/al")
          .pipe(retry(4))
          .subscribe((posRes)=>{
            console.log(posRes);
          },(errRes:HttpErrorResponse)=>{
              console.log(errRes);
          });
        */

        this.http.get("https://restcountries.eu/rest/v2/al")
        .pipe(retryWhen((error)=> error.pipe(delay(2000),scan((num)=>{
          if(num>4){
             throw error;
          }else{
            num = num+1;
          }
          return num;
        },0))))
        .subscribe((posRes)=>{
            console.log(posRes);
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        })



    }




}
