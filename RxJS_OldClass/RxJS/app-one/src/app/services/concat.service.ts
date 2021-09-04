import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import RestAPI1Model from '../model/restapi1.model';
import RestAPI2Model from '../model/restapi2.model';

@Injectable({
  providedIn: 'root'
})
export class ConcatService {

  constructor(private http:HttpClient) { }

  public getData():Observable<RestAPI2Model>{
      return this.http.get("http://localhost:8080/restapi1")
                 .pipe(
                    concatMap((posRes:RestAPI1Model)=> this.http.get<RestAPI2Model>(`http://localhost:8080/resapi2/${posRes.msg}`))
      )
  }

}
