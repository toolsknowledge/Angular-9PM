import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCredit } from './credit/credit.action';
import { CreditModel } from './credit/credit.model';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  constructor(private store:Store<CreditModel[]>) { }

  ngOnInit(): void {
  }

  addPost(name,type1){
    console.log(name,type1)
    this.store.dispatch(addCredit({name:name,type1:type1}));
  }

}
