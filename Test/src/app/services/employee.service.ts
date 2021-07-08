import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = 'assets/employees.json';
  constructor(private httpClient:HttpClient) { }
  getEmpInfo():Observable<any>{
     return this.httpClient.get(this.url)
}
}
