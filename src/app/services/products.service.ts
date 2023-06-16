import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.products))
  }

  getProductsbyCategory(category:string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}category/${category}`).pipe(
      map(response => response.products))
  }

  getProductsCategories():Observable<Array<string>>{
    return this.http.get<Array<string>>(this.apiUrl + 'categories')
  }

  
  
}