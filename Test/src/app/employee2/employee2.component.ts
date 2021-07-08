import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component{

  filteredString:string='';
  employee2:any=[];
  errMsg:any;
  constructor(employeeService:EmployeeService){
    employeeService.getEmpInfo().subscribe(  
      result => this.employee2 = result,
      error => this.errMsg = error
    )
    }
}
