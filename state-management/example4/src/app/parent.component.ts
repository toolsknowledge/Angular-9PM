import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  counter:number;
  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  onIncrement(){
    this.counter++;
  };

  onDecrement(){
    this.counter--;
  };

  onReset(){
    this.counter=0;
  }





}
