import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  username!: String;
  pssword!:String


  constructor( ) {

   }

  ngOnInit(): void {

  }

  Loginusr(): void {
    if (this.username =="GRAGRA" && this.pssword =="GRAGRA")
    {
      console.log("You can Pass")
    }
    else
    {
      console.log("You are Unwelcome")
    }
  }
}
