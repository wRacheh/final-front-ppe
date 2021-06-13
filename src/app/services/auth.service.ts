import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import{environment} from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url=environment.empURL;
  constructor(private http:HttpClient) { }
  

  signup(emp:any):Observable<any>{
    return this.http.post(this.url+"/signup",emp)
  }

  signin(emp:any):Observable<any>{
    return this.http.post(this.url+"/signin",emp)
  }
}
