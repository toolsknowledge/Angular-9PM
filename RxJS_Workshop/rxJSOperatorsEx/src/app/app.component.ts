import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxJSOperatorsEx';

    ngOnInit(){

      //  const arr = ["Angular","ReactJS","VueJS","NodeJS","MongoDB"];
      //  const obs = from(arr);
      //  obs.subscribe(console.log);


      // const str:string = "Hello";
      // const obs:Observable<string> = of(str);
      // obs.subscribe(console.log);


      // const obs = interval(1000);
      // obs.subscribe(console.log);

      const obs = timer(5000,1000);
      obs.subscribe(console.log);

    }

}
