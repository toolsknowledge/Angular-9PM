import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset1 } from './counter.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    result:number;
    constructor(private store:Store<any>){}
    ngOnInit(){
        this.store.select("count").subscribe((posRes)=>{
          this.result = posRes;
        })
    };

    increment(){
      this.store.dispatch(increment())
    }

    decrement(){
       this.store.dispatch(decrement())
    }

    reset(){
      this.store.dispatch(reset1());
    }


}
