import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './actions/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:any;
    constructor(private store:Store<any>){}

    ngOnInit(){
      
    }


    myFun(){
      this.store.select("login").subscribe((posRes)=>{
        this.title = posRes;
      })
    }

    loginFn(arg1,arg2){
       this.store.dispatch(login({username:arg1,password:arg2}))
       this.myFun();
    }


}
