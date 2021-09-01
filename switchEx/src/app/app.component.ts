import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap, retry, switchAll } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    ngOnInit(){
        const sub = ["Angular12","ReactJS","NodeJS"];
        const sub_ = from(sub);
        // sub_.subscribe((posRes)=>{
        //     console.log(posRes);
        // });

        sub_.pipe(
           mergeMap((sub)=>{ return this.getData(sub) }),
           //switchAll()
           //mergeAll()
          ).subscribe((posRes)=>{
           console.log(posRes);
        });
    }

    getData(sub):Observable<string>{
      return of(`${sub}  i loved it`).pipe(delay(1000));
    }



}
