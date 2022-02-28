import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = window.localStorage.getItem("username") ;
  constructor(private afAuth:AngularFireAuth, private _servc:AuthserviceService, private _http:HttpClient) { }

  httpOptions   = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-type:application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Firebase JWT' + this._servc.userToken
    })
  };

  ngOnInit(): void {
  }

  logout(): void {
    this.afAuth.signOut(); 
    // this.authenticated = false; 
    // this._http.post<any>("http://localhost:3000/login", user, httpOptions ).unsubscribe
  this._servc.userLoggedIn = false; 
   
    console.log("this is the logout JWT: " + this._servc.userToken);
  }
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}