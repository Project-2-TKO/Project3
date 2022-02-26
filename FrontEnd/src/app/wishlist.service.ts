import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _http: any;
  
  password: any;
  username: any;

  constructor( _http : HttpClient, private router : Router, 
     public auth: AngularFireAuthModule) {
     }


  Loginusr(){
   /* let user = {username: this.username,
                password: this.password};

    let Credentials = {withCredentials: true};
    this.auth = new firebase.auth.GoogleAuthProvider();
    console.log(this.auth);
    console.log(this.username);
    console.log(this.password);
    console.log(user);
    console.log(Credentials);

    //window.localStorage.setItem("username",this.username);
    let response = this._http.post<any>("http://localhost:3000/login", user, httpOptions )
    .subscribe (
      {
     //next: (v) => this.router.navigate(['/frontpage']),  //console.log("reponse rcieved"),
     // error: (e) => console.error(this.msgError="Invalid Credentials, Please Enter a Valid User Name And/or Password"),
      complete: () => window.localStorage.setItem("username",this.username)//console.info('Complete')
    }
    );
  };*/

}

}
