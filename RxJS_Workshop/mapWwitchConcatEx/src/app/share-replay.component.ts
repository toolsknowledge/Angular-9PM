import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'share',
  templateUrl: './share-replay.component.html',
  styles: [
  ]
})
export class ShareReplayComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      const ob$ = this.http.get("https://restcountries.eu/rest/v2/all")
                  .pipe( shareReplay() );

      ob$.subscribe((posRes)=>{
          console.log(posRes);
      },(errRes:HttpErrorResponse)=>{
          console.log(errRes);
      });


      ob$.subscribe((posRes)=>{
          console.log(posRes);
      },(errRes:HttpErrorResponse)=>{
          console.log(errRes);
      });

  }
}
