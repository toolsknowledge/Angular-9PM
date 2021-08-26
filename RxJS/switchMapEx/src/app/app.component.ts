import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'switchMapEx';
    myGroup:FormGroup;
    serachText:FormControl = new FormControl();
    counter:number = 0;
    ngOnInit(){
        fromEvent(document,"click").pipe(
            switchMap(()=> interval(1000) )
        ).subscribe((res)=> {this.counter = res })

       
    }
}
