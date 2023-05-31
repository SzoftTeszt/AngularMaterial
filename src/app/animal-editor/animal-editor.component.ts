import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-editor',
  templateUrl: './animal-editor.component.html',
  styleUrls: ['./animal-editor.component.css']
})
export class AnimalEditorComponent {
  displayedColumns=["nev","faj","helye","gondozo"];
  allat:any;
  id:any;

  constructor(private base:BaseService,private ar:ActivatedRoute){
    this.ar.params.subscribe(p=>{
      console.log("ID:",p['id'])
      this.id=p['id'];
      if (p['id'] !="")
            this.base.get(p['id']).subscribe(
              (a)=> this.allat=a
            )
      else this.allat={};
    })
  }

  onSubmit(){
    console.log("Érkezés ",this.allat.erkezes);
    var datum= new Date(this.allat.erkezes);
    // // console.log("Dátum", datum);
    // var datumString =datum.getFullYear()+"-"+datum.getMonth()+"-"+datum.getDay();
    // console.log("DátumS", datumString);
    this.allat.erkezes=datum.toLocaleDateString().replaceAll(". ","-").substring(0,10);

    // console.log("helyi:",datum.toLocaleDateString())
     this.base.update(this.allat.id, this.allat).subscribe(
       ()=>{return history.back()}
     )
  }
}
