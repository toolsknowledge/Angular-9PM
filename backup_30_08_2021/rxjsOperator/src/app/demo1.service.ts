import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Demo1Service {

  constructor(private http:HttpClient) { }

  getCustomers():Observable<any>{
    return this.http.get(`https://www.w3schools.com/angular/customers.php`).pipe(
      delay(10000)
    );
  }

}
