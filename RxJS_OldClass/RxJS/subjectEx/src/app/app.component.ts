import { Component } from '@angular/core';
import { interval, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'subjectEx';
    
    // ngOnInit(){
    //     const source = interval(1000);
    //     const subscribe1 = source.subscribe(val=> console.log(`First....${val}`));

    //     setTimeout(()=>{
    //         const subscribe2 = source.subscribe(val=> console.log(`Second....${val}`));
    //         subscribe1.unsubscribe();
    //         setTimeout(()=>{
    //           subscribe2.unsubscribe();
    //         },7000);
    //     },4000);
    // }
    
    // subject = new Subject();
    // ngOnInit(){
    //     const source = interval(1000);
    //     source.subscribe(val=> this.subject.next(val));
    //     const sub1 = this.subject.subscribe(val=>console.log(`First....${val}`));

    //     setTimeout(()=>{
    //       const sub2 = this.subject.subscribe(val=> console.log(`Second....${val}`));
    //       sub1.unsubscribe();
    //       setTimeout(()=>{
    //         const sub3 = this.subject.subscribe(val=>console.log(`Third....${val}`));
    //         sub2.unsubscribe();
    //       },7000);
    //     },4000);
    // }


    

    subject = new Subject();
    ngOnInit(){
        const source = interval(1000);
        source.subscribe(val=>this.subject.next(val));
        this.subject.subscribe(val=> console.log(`First....${val}`));

        setTimeout(()=>{
            source.subscribe(val=> this.subject.next(val));
            this.subject.subscribe(val=> console.log(`Second....${val}`))
        },5000);

    }



}

