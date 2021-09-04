import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin, fromEvent, zip } from 'rxjs';
import { delay,map, take } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'parallelCallsEx';
    constructor(private http:HttpClient){}

    /*
      //https://restcountries.eu/rest/v2/all
      //https://www.w3schools.com/angular/customers.php
      ngOnInit(){
        forkJoin([this.http.get("https://restcountries.eu/rest/v2/all").pipe(delay(10000)),
                  this.http.get("https://www.w3schools.com/angular/customers.php").pipe(delay(20000))])
                .subscribe(([call1,call2])=>{
              console.log(call1);
              console.log(call2);
        })
      }
    */

   @ViewChild("ang") ang:ElementRef;
   @ViewChild("react") react:ElementRef;

   ngOnInit(){
     
   };

   ngAfterViewInit(){
       const btn1$ = fromEvent(this.ang.nativeElement,"click")
                     .pipe(map((res:any)=>{ return res.target.innerHTML }),take(3) );
       const btn2$ = fromEvent(this.react.nativeElement,"click");

      //  btn1$.pipe(map((res:any)=>{ return res.target.innerHTML })).subscribe((posRes)=>{
      //     console.log(posRes);
      //  });

      //  btn2$.pipe(map((res:any)=>{ return res.target.innerHTML })).subscribe((posRes)=>{
      //     console.log(posRes);
      //  });

      zip(btn1$).subscribe((posRes)=>{
          console.log(posRes);
      });

      forkJoin([btn1$]).subscribe((posRes)=>{
          console.log(posRes);
      });

  }















}
