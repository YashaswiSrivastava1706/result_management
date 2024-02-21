import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentComponent} from './student/student.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'search/:rollnumber/:name',component:SearchComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
