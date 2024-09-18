import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  constructor(private _employeeservice:EmployeeService,private _router:Router){}
  Employees:Employee[]=[];
  ngOnInit():void{
    this._employeeservice.getAllEmployee().subscribe(data=>{
      this.Employees=data;
    })
  }
  UpdateEmployee(e_id:number){
    console.log(e_id);
    this._router.navigate(['Update-employee',e_id])
  }
  DeleteEmployeeData(e_id:number){
    this._employeeservice.DeleteEmployeeData(e_id).subscribe(res=>{
      if(res){
        alert("deleted")
      } 
    })
    
  }
      
}

