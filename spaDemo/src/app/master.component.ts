import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  message:string;
  constructor() { 
    this.message = ""
  }

  ngOnInit(): void {
  }

}
