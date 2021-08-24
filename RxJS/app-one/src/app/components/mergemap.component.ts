import { Component, OnInit } from '@angular/core';
import { Restapi1Service } from '../services/restapi1.service';
import { Restapi2Service } from '../services/restapi2.service';
import { mergeMap } from "rxjs/operators";
import { MergeService } from '../services/merge.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'mergemap',
  templateUrl: './mergemap.component.html',
  styles: [
  ]
})
export class MergemapComponent implements OnInit {
  result:any;
  constructor(private service:MergeService) { }

  ngOnInit(): void {
     this.service.getData().subscribe((posRes)=>{
        this.result = posRes;
     },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
     })
  }

}
