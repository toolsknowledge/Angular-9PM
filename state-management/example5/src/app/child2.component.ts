import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import counterState from './counter.state';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styles: [
  ]
})
export class Child2Component implements OnInit {

  constructor(private store:Store<counterState>) { }

  ngOnInit(): void {
  }

  onIncrement(){
      this.store.dispatch( increment() );
  }

  onDecrement(){
     this.store.dispatch( decrement() );
  }


  onReset(){
    this.store.dispatch( reset() );
  }


}
