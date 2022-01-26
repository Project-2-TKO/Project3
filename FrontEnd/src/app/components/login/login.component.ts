import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  let uname:string;
  let upass:string;
  constructor() { }

  ngOnInit(): void {
  }
  
  Loginusr(): void {
    if (this.uname =="GRAGRA" && this.upass =="GRAGRA")
    {
      console.log("You can Pass")
    }
    else
    {
      console.log("You are Unwelcome")
    }
  }
}
