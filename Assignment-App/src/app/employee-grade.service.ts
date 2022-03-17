import { Injectable } from '@angular/core';
import { Employee } from './employee-grade';
@Injectable({
  providedIn: 'root'
})
export class EmployeeGradeService {
  public getEmployee(){
    let employee:Employee[];
    employee = [
      new Employee(1,900523,"Kelvin",9),
      new Employee(2,900114,"Andrew",6),
      new Employee(3,900585,"Anu",10),
      new Employee(4,900516,"Oliver",10),
      new Employee(5,900510,"Noah",8),
      new Employee(6,900518,"Emma",5),
    ];
    return employee;
  }
  constructor() { }
}
