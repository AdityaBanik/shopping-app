import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://dummyjson.com/auth/login'; 
  
  constructor(private http:HttpClient){}
  

  getAuthToken() {
    const token = localStorage.getItem('token') 
  }

  login(credentials:any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl,credentials,{headers})
  }
  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}

