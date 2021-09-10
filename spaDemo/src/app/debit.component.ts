import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'debit',
  templateUrl: './debit.component.html',
  styles: [
  ]
})
export class DebitComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Debit Card !!!";
   }

  ngOnInit(): void {
  }

}
