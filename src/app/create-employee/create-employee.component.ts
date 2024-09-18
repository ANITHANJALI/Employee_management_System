import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee=new Employee();
   constructor(private _employeeservice:EmployeeService,private _router:Router){}
   ngOnInit():void{

   }
   
   
   addEmployeeData(){
        this._employeeservice.addEmployee(this.employee).subscribe(data=>{
          alert("Employee data inserted Sucessfully");
          this.gotolistofEmployeePage();
        }
          
        )
   }

gotolistofEmployeePage(){
  this._router.navigate(['/employee']);

}
}
