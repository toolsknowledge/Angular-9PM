import { Component, OnInit } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service:Service1Service) { }

  ngOnInit(): void {
  }

  clickMe(data){
      this.service.set(data);
  }



}
