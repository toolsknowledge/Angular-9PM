import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeAll, switchAll } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'mapWwitchConcatEx';

    ngOnInit(){
        const arr1 = ["Angular12","ReactJS","NodeJS","VueJS","MongoDB"];
        const arr1$ = from(arr1);


        arr1$.pipe(concatMap((sub)=>{
            return this.customFn(sub);
        }))
        .subscribe((res1)=>{
            console.log(res1);
        });
    }

    customFn(sub:string):Observable<string>{
        return of(`I love ${sub}`).pipe(delay(2000));
    }
}


//map()
//concatAll()       mergeAll()    switchAll()
//concatMap()



