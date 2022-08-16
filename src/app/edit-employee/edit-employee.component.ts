import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private ar:ActivatedRoute) { 
    this.ar.queryParams.subscribe(data =>{  //query parameters
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
