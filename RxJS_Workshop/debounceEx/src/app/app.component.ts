import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BooksService } from './services/books.service';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    arr:Array<any>;

    booksSerach:Subject<any> = new Subject();

    search($event){
      this.booksSerach.next($event.target.value);
    }

    constructor(private service:BooksService){}

    getSearchedBooks(value:string){
        this.service.getBooks(value).subscribe((posRes)=>{
            this.arr = posRes.items;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        })
    }

    ngOnInit(){
        this.booksSerach.pipe(debounceTime(1000),distinctUntilChanged())
            .subscribe( value=> this.getSearchedBooks(value) );
    }


}
