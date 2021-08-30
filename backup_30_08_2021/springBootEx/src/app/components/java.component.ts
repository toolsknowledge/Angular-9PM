import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'java',
  templateUrl: './java.component.html',
  styles: [
  ]
})
export class JavaComponent implements OnInit {
  result:any;
  constructor(private service:JavaService) { }

  ngOnInit(): void {
     this.service.getProducts().subscribe((posRes)=>{
          this.result = posRes;
     },(errRes:HttpErrorResponse)=>{
        console.log( errRes );
     });
  }

}
