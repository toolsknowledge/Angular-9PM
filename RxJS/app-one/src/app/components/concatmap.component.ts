import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConcatService } from '../services/concat.service';

@Component({
  selector: 'concat',
  templateUrl: './concatmap.component.html',
  styles: [
  ]
})
export class ConcatmapComponent implements OnInit {

  constructor(private service:ConcatService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((posRes)=>{
        console.log(posRes);
    },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
    });
  }

}
