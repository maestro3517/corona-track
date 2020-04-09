import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class Authservice {

  private regurl='http://localhost:3000/api/register'
  private logurl='http://localhost:3000/api/login'
  

  constructor(private http:HttpClient) {   }

  registerUser(user):Observable<any>{
    return this.http.post<any>(this.regurl,user);
  }

  loginUser(user):Observable<any>{
    return this.http.post<any>(this.logurl,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
  
}
