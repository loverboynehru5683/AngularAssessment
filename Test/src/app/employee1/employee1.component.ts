import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component{
  
  // filteredString:string='';

  // employee1:any=[
  //     {empId:101,empName:"suresh",empSal:30000},
  //     {empId:102,empName:"ramesh",empSal:20000},
  //     {empId:103,empName:"naresh",empSal:15000}
  // ];
  
  // errMsg:any;
  // constructor(employeeService:EmployeeService){
  //   employeeService.getEmpInfo().subscribe(
  //     result => this.employee1 = result,
  //     error => this.errMsg = error
  //   )
  //   }

}
