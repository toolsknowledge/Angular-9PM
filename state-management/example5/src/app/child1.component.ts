import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selector1 } from './counter.selector';
import counterState from './counter.state';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styles: [
  ]
})
export class Child1Component implements OnInit {

  count:any;
  count$:Observable<any>;
  counterSubScription:Subscription;


  constructor(private store:Store<counterState>) { }

  ngOnInit(): void {
    this._subscription();
  }

  _subscription(){
      
      this.counterSubScription = this.store.select(selector1).subscribe((posRes:any)=>{
        console.log("child1 subscription");
         this.count = posRes;
      })


    //this.count$ = this.store.select("counter");



  }


   ngOnDestroy(){
    this.counterSubScription.unsubscribe();
   }





}
