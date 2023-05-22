import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

dataSource:any;
displayedColumns=["id","nev","faj","erkezes","helye","gondozo"];

constructor(private base:BaseService){
  this.dataSource=this.base.getAll();
}

}
