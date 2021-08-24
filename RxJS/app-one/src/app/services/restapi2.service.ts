import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import RestAPI2Model from '../model/restapi2.model';

@Injectable({
  providedIn: 'root'
})
export class Restapi2Service {

  constructor(private http:HttpClient) { }

  public getRestAPI2Data(key:any):Observable<RestAPI2Model>{
      return this.http.get<RestAPI2Model>(`http://localhost:8080/restapi2/${key}`);
  }
}
