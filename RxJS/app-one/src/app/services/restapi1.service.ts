import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import RestAPI1Model from '../model/restapi1.model';

@Injectable({
  providedIn: 'root'
})
export class Restapi1Service {

  constructor(private http:HttpClient) { }

  public getRestAPI1Data():Observable<RestAPI1Model>{
      return this.http.get<RestAPI1Model>("http://localhost:8080/restapi1");
  }

}
