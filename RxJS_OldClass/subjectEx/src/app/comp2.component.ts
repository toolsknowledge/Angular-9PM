import { Component, OnInit } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  msg:any;

  constructor(private service:Service1Service) { }

  ngOnInit(): void {
    
      this.service.get().subscribe((posRes)=>{
          this.msg = posRes;
      },(errRes)=>{
          console.log(errRes);
      });
  
  }

}
