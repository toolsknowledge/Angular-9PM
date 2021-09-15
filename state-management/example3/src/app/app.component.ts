import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example3';
  constructor(private store:Store<any>){
      
  }

  ngOnInit(){
     this.store.select("bank").subscribe((res)=>{
        console.log(res);
     })
  }

  clickMe(){
     this.store.dispatch(login({username:"ashok",password:"ashokit"}))
  }








}
