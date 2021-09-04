import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { shareReplay } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private http:HttpClient) { }
  public getData():Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/all").pipe(
      shareReplay()
    );
  }
}
