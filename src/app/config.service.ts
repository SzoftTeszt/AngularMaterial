import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public menuItems=[
    {url:'/', text:'Home', icon: 'home'},
    {url:'/basic', text:'Basic', icon: 'table_chart'},
    {url:'/paginator', text:'Paginator', icon: 'last_page'},
    {url:'/filter', text:'Filter', icon: 'filter_alt'},
    {url:'/editable', text:'Editable', icon: 'create'},
  ]
  constructor() { }
}
