import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path:'employee',
    component:EmployeeListComponent
  },
  {
    path:'addEmployee',
    component:CreateEmployeeComponent
  },
  {
    path:'',
    component:EmployeeListComponent

  }
  ,
  {
    path:'Update-employee/:e_id',
    component:UpdateEmployeeComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
