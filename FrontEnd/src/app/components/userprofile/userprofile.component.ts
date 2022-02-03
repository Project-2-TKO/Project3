import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs';
import { of } from 'rxjs';
import { error } from '@angular/compiler/src/util';


const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  usrID!: String;
  username!: String;
  password!: String;
  email!:String;
  ccname!: String;
  ccnum!: String;
  fname!: String;
  lname!: String;
  phnum!: String;
  phadd!: String;

  user = {username: String,
          password: String,
          email_address: String,
          credit_card_name :String,
          credit_card_number : String,
          first_name: String,
          Last_name: String,
          Phone_number: String,
          Physical_address: String
        };
  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  constructor(private _http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  udpprfusr(){
    let userID = 3;
    let user = {
      username:      this.username,
      password:      this.password,
      email_address: this.email,
      credit_card_name : this.ccname,
      credit_card_number : this.ccnum,
      first_name: this.fname,
      Last_name: this.lname,
      Phone_number: this.phnum,
      Physical_address: this.phadd
    };
console.log(this.username);
console.log(this.password);
console.log(user);
let Credentials = {withCredentials: true};
let response =this._http.put<any>("http://localhost:3000/user/" +userID+"/",user ,httpOptions,).subscribe (
{
next: (v) => this.router.navigate(['/']),  //console.log("reponse rcieved"),
error: (e) => console.error(this.msgError="User name or email  is alredy registred"),
complete: () => console.info('Complete')
});

console.log(response);

  }

}
