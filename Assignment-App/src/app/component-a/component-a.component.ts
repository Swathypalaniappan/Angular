import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  var: any;
  data: any;
  constructor() { 
    this.data = {No:"",AID:"",Name:"",Grade:""};
    this.var = 0;
  }
  view_table(employee: any){
    this.var = 10;
    console.log(employee);
    this.data = employee;
  }

  ngOnInit(): void {
  }

}
