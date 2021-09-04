import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Demo1Service } from './demo1.service';
import { Demo2Service } from './demo2.service';

@Component({
  selector: 'parallel',
  templateUrl: './parallel.component.html',
  styles: [
  ]
})
export class ParallelComponent implements OnInit {

  constructor(private s1:Demo1Service,
              private s2:Demo2Service) { }

  ngOnInit(): void {
    
      forkJoin([this.s1.getCustomers(),
                this.s2.getCountries()]).subscribe((posRes)=>{
            console.log(posRes);
      });
  
  }

}
