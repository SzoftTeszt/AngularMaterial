import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FilterComponent } from './filter/filter.component';
import { EditableComponent } from './editable/editable.component';
import { AnimalEditorComponent } from './animal-editor/animal-editor.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'basic', component:BasicComponent},
  {path:'paginator', component:PaginatorComponent},
  {path:'filter', component:FilterComponent},
  {path:'editable', component:EditableComponent},
  {path:'editable/edit/:id', component:AnimalEditorComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
