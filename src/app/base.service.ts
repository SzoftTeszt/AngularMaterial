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

  get(id:any){
    return this.http.get(this.url+id);
  }


  delete(id:any){
    return this.http.delete(this.url+id)
  }

  update(id:any, body:any){
    console.log("id:", id);
    if (id==undefined) return this.http.post(this.url, body)
    return this.http.put(this.url+id, body)
  }
}
