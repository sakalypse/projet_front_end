import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{Observable} from 'rxjs/Observable';
import{Town} from './town'

@Injectable()
export class TownService {

  private townUrl = 'https://lpa2sgadot.herokuapp.com/towns/';
  
  constructor(private http: HttpClient) { 
  }
  
  getTown(id:number) : Observable<Town>{
    return this.http.get<Town>(`${this.townUrl}/${id}.json`)
  }

}
