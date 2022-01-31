import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  username!: String;
  password!:String;
  result!: boolean;
  user = {username: String, password: String};
  Credentials = {withCredentials: true};
  response : any ;
  constructor(private _http : HttpClient, private router : Router ) {

   }

  ngOnInit(): void{
   // this.response=this._http.post("localhost:3000/login",this.user, this.Credentials );
  }

  Loginusr(){
    let user = {username: this.username,
                password: this.password};

    let Credentials = {withCredentials: true};
    console.log(this.username);
    console.log(this.password);
    console.log(user);
    console.log(Credentials);
    let response = this._http.post<any>("http://localhost:3000/login", user, httpOptions ).subscribe ({
      next: (v) => this.router.navigate(['/frontpage']),  //console.log("reponse rcieved"),
      error: (e) => console.error(e),
      complete: () => console.info('Complete')
    }
    );
    console.log(response);

     //let response = this._http.post<any>("localhost:3000/login", user, Credentials );
     //.pipe(Map(this.user), catchError(this.handleErrorObservable));
      console.log(response);
   /* if (this.username =="GRAGRA" && this.password =="GRAGRA")
    {
      console.log("You can Pass")

    }
    else
    {
      console.log("You are Unwelcome")
    }*/
  }
}
