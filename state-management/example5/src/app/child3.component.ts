import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeLabel, customData } from './counter.actions';
import { selector2 } from './counter.selector';
import counterState from './counter.state';

@Component({
  selector: 'child3',
  templateUrl: './child3.component.html',
  styles: [
  ]
})
export class Child3Component implements OnInit {
  value:number;
  msg:string;
  constructor(private store:Store<counterState>) { }

  ngOnInit(): void {
    this._subscription();
  }

  _subscription(){
      console.log("child3 component subscription");
      this.store.select(selector2).subscribe((posRes:any)=>{
         console.log("child3");
         this.msg = posRes;
      })
  }



  addData(){
      this.store.dispatch(customData({value:this.value}))
  }


  changeLabel(){
     
     this.store.dispatch(changeLabel());
  }

}
