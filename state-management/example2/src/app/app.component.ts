import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deposit, withdraw } from './bank.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    bal:number;
    constructor(private store:Store<any>){}

    ngOnInit(){
       this.store.select("bank").subscribe((posRes)=>{
          this.bal = posRes;
       })
    }

    dep(){
       this.store.dispatch(deposit());
    }

    wit(){
      this.store.dispatch(withdraw());
    }
}
