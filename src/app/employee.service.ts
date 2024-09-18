import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  DeleteEmployee(e_id: number) {
    throw new Error('Method not implemented.');
  }
  
  
  baseURL="http://localhost:8080/employee";
  baseURL1="http://localhost:8080/employee1/";

  constructor(private _httpclient:HttpClient) { }
  addEmployee(employee:Employee):Observable<any>{
         return this._httpclient.post(this.baseURL,employee, {responseType:'text'});
  }
  getAllEmployee():Observable<Employee[]>{
    return this._httpclient.get<Employee[]>(this.baseURL)
  }
  getEmployeeById(e_id:number):Observable<Employee> {
    return this._httpclient.get<Employee>(this.baseURL+'/'+e_id);
  }
  UpdateEmployeeData(employee: Employee):Observable<Employee> {
   return this._httpclient.post<Employee>(this.baseURL,employee);
  }
 DeleteEmployeeData(e_id: number):Observable<any> {
    return this._httpclient.delete<Employee>(this.baseURL1+e_id);
   }
}
