import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { EmployeeGradeService } from '../employee-grade.service';
import { Employee } from '../employee-grade';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  employee: Employee[];
  @Output() callToParent = new EventEmitter();
  constructor(private employees:EmployeeGradeService) { 
    this.employee = this.employees.getEmployee();
  }
  callParent(){
    console.log(this.employee);
    this.callToParent.emit(this.employee);
  }

  ngOnInit(): void {
  }

}
