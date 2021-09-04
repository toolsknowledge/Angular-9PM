import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Restapi1Service } from '../services/restapi1.service';
import { Restapi2Service } from '../services/restapi2.service';

@Component({
  selector: 'forkjoin',
  templateUrl: './forkjoin.component.html',
  styles: [
  ]
})
export class ForkjoinComponent implements OnInit {

  result:any;

  constructor(private service1:Restapi1Service,
              private service2:Restapi2Service) { }

  ngOnInit(): void {
      forkJoin(
        [this.service1.getRestAPI1Data(),
         this.service2.getRestAPI2Data("rxjs")]
      ).subscribe((posRes)=>{
          this.result = posRes;
      },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
      })
  }

}
