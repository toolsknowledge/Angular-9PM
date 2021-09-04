import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjsOperator';
    constructor(private service:DemoService){}
    sub1$:any;
    ngOnInit(){
        this.sub1$ = this.service.getData();
        
        this.sub1$.subscribe((posRes)=>{
          console.log(posRes);
        });

        this.sub1$.subscribe((posRes)=>{
            console.log(posRes);
        });
    }

    ngOnDestroy(){
      this.sub1$.unsubscribe();
    };


}
