import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styles: [
  ]
})
export class AccountsComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "Accounts Soon !!!";
   }

  ngOnInit(): void {
  }

}
