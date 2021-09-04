import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map,skip, take, tap } from 'rxjs/operators';

@Component({
  selector: 'take',
  templateUrl: './take.component.html',
  styles: [
  ]
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     const arr = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
     const arr$ = from(arr);

    //  arr$.pipe(take(3)).subscribe((posRes)=>{
    //   console.log(posRes);
    // })

    //  arr$.pipe(skip(3)).subscribe((posRes)=>{
    //     console.log(posRes);
    //  })

    arr$.pipe(tap((res)=>{ return "H "+res })).subscribe((posRes)=>{
        console.log(posRes);
    });

  }

}
