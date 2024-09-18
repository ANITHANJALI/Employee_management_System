import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  constructor(private _activerouter:ActivatedRoute,private _Employeeservice:EmployeeService,private _router:Router){}
  e_id!:number;
  employee: Employee=new Employee();
  ngOnInit():void{
     this.e_id=this._activerouter.snapshot.params['e_id'];
     console.log(this.e_id);
    this._Employeeservice.getEmployeeById(this.e_id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
    })
  }
  
  UpdateEmployeeData(){
    this._Employeeservice.UpdateEmployeeData(this.employee).subscribe(data=>{
      if(data){
        alert("deleted");
        
      }

    });
  }
}
