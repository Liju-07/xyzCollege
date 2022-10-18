import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }

  Mobile=""
  Address=""
  DOJ=""
  dob=""
  department=""
  Qualifications=""
  Designation=""
  name=""

read(){
  let data={
    "  Mobile":this.Mobile,
    " Address":this.Address,
    " DOJ":this.DOJ,
    "  dob":this.dob,
    " department":this.department,
    " Qualifications":this.Qualifications,
    "  Designation":this.Designation,
    " name":this.name,
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
