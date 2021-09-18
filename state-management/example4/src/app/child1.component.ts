import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styles: [
  ]
})
export class Child1Component implements OnInit {
  @Input() counter;
 

  constructor() { }

  ngOnInit(): void {
  }

}
