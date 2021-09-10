import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rupe',
  templateUrl: './rupe.component.html',
  styles: [
  ]
})
export class RupeComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Rupe !!!";
   }

  ngOnInit(): void {
  }

}
