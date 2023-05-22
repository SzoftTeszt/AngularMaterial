import { Component, ViewChild } from '@angular/core';
import { BaseService } from '../base.service';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from 'src/Animal';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
dataSource?:MatTableDataSource<Animal>;
allatok:any;
displayedColumns=["id","nev","faj","erkezes","helye","gondozo"];

@ViewChild('paginator') panginator!: MatPaginator;

constructor(private base:BaseService){
 this.base.getAll().subscribe(
    (a)=>{
      this.allatok=a;
      this.dataSource= new MatTableDataSource(this.allatok);
      this.dataSource.paginator=this.panginator;
    }
  )
}
}
