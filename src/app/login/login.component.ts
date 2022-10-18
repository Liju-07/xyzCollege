import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private routes:Router) { }

username=""
password=""

read()
{
  let data={
   " username":this.username,
   " password":this.password
  }

   if (this.username=="admin" && this.password=="admin" ) {

alert("LOGIN SUCCESS")
this.routes.navigate(["/h"])
    
   } else {
    alert("Invalid Data")
   this.username=""
   this.password=""
    
   }
  
}


  ngOnInit(): void {
  }

}
