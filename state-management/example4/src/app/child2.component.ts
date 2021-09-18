import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styles: [
  ]
})
export class Child2Component implements OnInit {

  @Output() incre = new EventEmitter<void>();
  @Output() decre = new EventEmitter<void>();
  @Output() rese = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  increment(){
     this.incre.emit();
  }

  decrement(){
    this.decre.emit();
  }

  reset(){
    this.rese.emit();
  }



}
