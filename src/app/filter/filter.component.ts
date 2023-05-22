import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from 'src/Animal';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  dataSource?:MatTableDataSource<Animal>;
  allatok:any;
  displayedColumns=["id","nev","faj","erkezes","helye","gondozo"];
  
  aktualisKereses="";

  @ViewChild('paginator') panginator!: MatPaginator;
  
  constructor(private base:BaseService){
   this.base.getAll().subscribe(
      (a)=>{
        this.allatok=a;
        this.dataSource= new MatTableDataSource(this.allatok);
        this.dataSource.paginator=this.panginator;
        this.dataSource.filterPredicate =
        (data:any, filter:string) =>{
          const source = this.aktualisKereses ? data[this.aktualisKereses] : JSON.stringify(data);
          return source.toLowerCase().includes(filter);
        }
      }
    )
  }

  applyFilter(event:any){
    const fv= event;
    // const fv= event.target.value.toLowerCase();
    console.log("fv",fv);
    if (this.dataSource) {
          this.dataSource.filter=fv;
          console.log("fv",fv);
    }

  }
}
  