import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { withLatestFrom } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    arr1:Array<any> = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
    arr2:Array<any> = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];

    // s1 = new Subject<string>();
    // s2 = new Subject<string>();

    s1 = new BehaviorSubject<string>("Hello_1");
    s2 = new BehaviorSubject<string>("Welcome_1");



    fun_one(event){
        this.s1.next(event.target.value);
    }

    fun_two(event){
        this.s2.next(event.target.value);
    }

    ngOnInit(){
        // combineLatest([this.s1.asObservable(),
        //                this.s2.asObservable()]).subscribe((res)=>{
        //       console.log(res);
        // });

        this.s1.pipe( withLatestFrom(this.s2) ).subscribe((res)=>{
          console.log( res );
        })


    };

}
