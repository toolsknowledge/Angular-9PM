import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Demo2Service {

  constructor(private http:HttpClient) { }

  public getCountries():Observable<any>{
      return this.http.get("https://restcountries.eu/rest/v2/all").pipe(delay(20000));
  }
}
