import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees: any[]=[
    {id:1, name:"Smith",age:34,salary:5200},
    {id:2, name:"Peter",age:34,salary:5100},
    {id:3, name:"Olivia",age:34,salary:5500},
    {id:4, name:"Daniel",age:34,salary:5700}
  ]
}
