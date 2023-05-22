import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/allatok/";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }
}
