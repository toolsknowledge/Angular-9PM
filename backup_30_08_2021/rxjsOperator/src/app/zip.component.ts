import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'zip',
  templateUrl: './zip.component.html',
  styles: [
  ]
})
export class ZipComponent implements OnInit {
  
  @ViewChild("btn1") btn1:ElementRef;
  @ViewChild("btn2") btn2:ElementRef;


  constructor() { }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
     const ob1$ = fromEvent(this.btn1.nativeElement,"click")
        .pipe(map((dummyData:any)=>{
          return dummyData.target.innerHTML;
     }), take(4) );
    
      
     zip(ob1$).subscribe((data)=>{
      console.log(data);
    });

     forkJoin([ob1$]).subscribe((data)=>{
       console.log(data);
     });
    



  }




  


}
