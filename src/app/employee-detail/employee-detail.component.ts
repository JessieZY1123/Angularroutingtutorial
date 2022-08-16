import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  emp ={
    id:0,
    name:""
  }

  constructor(private ar:ActivatedRoute) { 
    this.ar.params.subscribe(data=>{
      this.emp.id =data["id"]
      this.emp.name = data["name"]
    });
  }
//params from activatedRoute returns an observable，
//whenever you are using observable then to get result from observable you need to subscribe it
  ngOnInit(): void {
  }

}
