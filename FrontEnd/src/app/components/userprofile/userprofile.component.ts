import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { catchError} from 'rxjs';
import { of } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { ArrayDataSource } from '@angular/cdk/collections';
import { User } from 'src/app/models/user';


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
  username!: string;
  password!: String;
  email!:String;
  ccname!: String;
  ccnum!: String;
  fname!: String;
  lname!: String;
  phnum!: String;
  phadd!: String;
  uname: string;
  user = {user_id: String,
          username: String,
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
  public lusername= window.localStorage.getItem("username");

   ;
  s_username: any;
  constructor(private _http : HttpClient, private router : Router) { }
  getUserByUsername(lusername : any):Observable<HttpResponse<User>>{
    return this._http.get("http://localhost:3000/user/username/" +lusername+"/", {observe: "response"}) as Observable<HttpResponse<User>>
    }
  ngOnInit(): void
  {
      //lusername= window.localStorage.getItem("username");
      console.log("sesion user.... "+window.localStorage.getItem("username"))
      let uname = window.localStorage.getItem("username");
      let luser = this.user;
      //this.username = uname;
      this.getUserByUsername(uname).subscribe(
        (data:any) =>{
          this.user = data;
          //let response: String = data.response;
          console.log(this.user)
          this.user = data.body;
          for(let usr of data.body)
          {
            this.username= usr.username;
            this.email=usr.email_address;
            this.fname=usr.first_name;
            this.lname=usr.Last_name;
            this.phnum=usr.Phone_number;
            this.phadd=usr.Physical_address;
            this.ccnum=usr.credit_card_number;
            this.ccname=usr.credit_card_name;
            this.usrID=usr.user_id;
          }
        }
      );
  }


  udpprfusr(){
    console.log(this.lusername);
    this.s_username= localStorage.getItem('username');
    console.log("session name"+this.s_username);
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
let response =this._http.put<any>("http://localhost:3000/user/" +this.usrID+"/",user ,httpOptions,).subscribe (
{
next: (v) => this.router.navigate(['/frontpage']),  //console.log("reponse rcieved"),
error: (e) => console.error(this.msgError="User name or email  is alredy registred"),
complete: () => console.info('Complete')
});

console.log(response);

  }

}
