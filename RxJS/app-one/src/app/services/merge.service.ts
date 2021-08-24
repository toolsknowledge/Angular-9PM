import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import RestAPI1Model from '../model/restapi1.model';
import RestAPI2Model from '../model/restapi2.model';

@Injectable({
  providedIn: 'root'
})
export class MergeService {

  constructor(private http:HttpClient) { }

    public getData():Observable<RestAPI2Model>{
        return this.http.get<RestAPI1Model>("http://localhost:8080/restapi1")
            .pipe(
              mergeMap((posRes:RestAPI1Model)=> 
                this.http.get<RestAPI2Model>(`http://localhost:8080/restapi2/${posRes.msg}`)))
    }
}
