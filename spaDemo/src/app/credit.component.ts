import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'credit',
  templateUrl: './credit.component.html',
  styles: [
  ]
})
export class CreditComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Credit Card !!!";
   }

  ngOnInit(): void {
  }

}
