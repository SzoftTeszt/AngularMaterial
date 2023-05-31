import { Component, ViewChild } from '@angular/core';
import { BaseService } from '../base.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from 'src/Animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent {
  dataSource?:MatTableDataSource<Animal>;
  allatok:any;
  displayedColumns=["id","nev","faj","erkezes","helye","gondozo", "műveletek"];
  
  aktualisKereses="";

  @ViewChild('paginator') panginator!: MatPaginator;
  
  refresh(){
    this.base.getAll().subscribe(
      (a)=>{
        this.allatok=a;
        this.dataSource= new MatTableDataSource(this.allatok);
      })
  }

  constructor(private base:BaseService, private router:Router){
   this.base.getAll().subscribe(
      (a)=>{
        this.allatok=a;
        this.dataSource= new MatTableDataSource(this.allatok);
        this.dataSource.paginator=this.panginator;
        this.dataSource.filterPredicate =
        (data:any, filter:string) =>{
          // let source2 = this.aktualisKereses ? data[this.aktualisKereses]  : JSON.stringify(data);
          let source="";
          
          if (this.aktualisKereses) source=String(data[this.aktualisKereses])
          else {
            this.displayedColumns.forEach(element => {
                source+=String(data[element]);
              });
          }        
          console.log("Source:",source);
          return source.toLowerCase().includes(filter);
        }
      }
    )
  }

  applyFilter(event:any){
    const fv= (event as string).toLowerCase();
    // const fv= event.target.value.toLowerCase();
    //console.log("fv",fv);
    if (this.dataSource) {
          this.dataSource.filter=fv;
          //console.log("fv",fv);
    }

  }

  onEdit(animal?:any){
    if (animal) this.router.navigate(['editable','edit',animal.id]);
    else this.router.navigate(['editable','edit',""]);
    
  }

  onDelete(animal:any){
    this.base.delete(animal.id).subscribe(
      ()=>{console.log("Sikeres törlés"); this.refresh();}
    )
  }
}
  