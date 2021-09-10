import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visa',
  templateUrl: './visa.component.html',
  styles: [
  ]
})
export class VisaComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Visa !!!";
   }

  ngOnInit(): void {
  }

}
