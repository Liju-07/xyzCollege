import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  Email=""
  pMobile=""
  gAddress=""
  gname=""
  dob=""
  blood=""
  department=""
  college=""
  rollno=""
  name=""
  Admission=""

read()
{
  let data={
   " Email ":this.Email,
   " pMobile ":this.pMobile,
    " gAddress ":this.gAddress,
    "  gname ":this.gname,
    "  dob ":this.dob,
    " blood ":this.blood,
    " department ":this.department,
    " college ":this.college,
    " rollno ":this.rollno,
    " name ":this.name,
    " Admission ":this.Admission,
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
