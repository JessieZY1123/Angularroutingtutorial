import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  emp={
  name: "Roger", //propetry
  age: 36,
  salary:5400,
  department: "IT"
  }
  // name:string = "Roger" //propetry
  // age: number = 36
  // salary: number=5400
  // department: string= "IT"
  message: string = "Welcome"


  constructor() { }

  ngOnInit(): void {
  }

}
