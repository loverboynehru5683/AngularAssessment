import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString === '') {
      return value;
    }
    const employeeArr: any = [];
    for (const employee of value) {
      if (employee.empName.includes(filteredString)) {
        employee.push(employee);
      }
    }
    return employeeArr;
  }

}
