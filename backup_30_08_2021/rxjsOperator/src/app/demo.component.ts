import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [
  ]
})
export class DemoComponent implements OnInit {

  constructor() { }

  sub1:any;
  sub2:any;
  ngOnInit(): void {
       //interval()
       //timer()
       this.sub1 = interval(1000);
       this.sub1.subscribe((res)=>{
          console.log(res);
       });

      this.sub2 = timer(10000,1000);
      this.sub2.subscribe((posRes)=>{
          console.log(posRes);
      });
  }

}
