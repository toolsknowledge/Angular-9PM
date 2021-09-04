import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'catch',
  templateUrl: './catch-error.component.html',
  styles: [
  ]
})
export class CatchErrorComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    forkJoin([this.http.get("https://restcountries.eu/rest/v2/all"),
              this.http.get("https://www.w3schools.com/angular/customers.ph")
                  .pipe(catchError((err)=>{ return of("error....!")}))])
    .subscribe((posRes)=>{
          console.log(posRes);
    },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
    })
  }

}
