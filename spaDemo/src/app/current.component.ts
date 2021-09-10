import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current',
  templateUrl: './current.component.html',
  styles: [
  ]
})
export class CurrentComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Current !!!";
   }

  ngOnInit(): void {
  }

}
