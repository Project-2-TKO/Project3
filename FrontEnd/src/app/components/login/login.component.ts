import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay} from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
//firebase
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { waitForAsync } from '@angular/core/testing';
import { stringify } from 'querystring';
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
  userLoggedIn!: boolean;// Flag user login
  signInForm!: FormGroup;
  firebaseErrorMessage!: string;
  email!:string;
  username!: string;
  password!:String;
  result!: boolean;
  user = {username: String, password: String};
  Credentials = {withCredentials: true};
  response : any ;
  //msgError="Invalid Credentials, Please Enter a Valid User Name And/or Password";
  msgError ="";
  constructor(private _http : HttpClient, private router : Router,  public auth: AngularFireAuth, public _srvc : AuthserviceService) {
   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-type:application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Firebase JWT' + this._srvc.userToken
    })
  };

  ngOnInit(): void{
    //window.localStorage.clear();
    // this.response=this._http.post("localhost:3000/login",this.user, this.Credentials );
    this.signInForm = new FormGroup({
      'password': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
    });
  }
  Loginusr(e:any){
    if(e){
          e.preventDefault(); //prevents default form behavior
        }

    //Login user
    // this.auth.signInWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.password);
    this._srvc.loginUser(this.signInForm.value.email, this.signInForm.value.password);

   
    
    let user = {username: this.signInForm.value.email,
                password: this.signInForm.value.password};
    let Credentials = {withCredentials: true};
    //this.auth = new firebase.auth.GoogleAuthProvider();
    // console.log(this.auth);
    // console.log("before DB conn"+this.signInForm.value.username);
    // console.log("before DB conn"+this.signInForm.value.password);
    // console.log(user);
    // console.log(Credentials);
    delay(5000);
    //window.localStorage.setItem("username",this.username);
    let response = this._http.post<any>("http://localhost:3000/login", user, httpOptions ).subscribe (
      {
      next: (v) =>  this.getToken(e),//this.router.navigate(['/frontpage']),  //console.log("reponse rcieved"),
      error: (e) => console.error(this.msgError="Invalid Credentials, Please Enter a Valid User Name And/or Password"),
      complete: () => window.localStorage.setItem("username", user.username)//console.info('Complete')
    }
    );

    //Check flag in the service if it is _______ unsub from response
  };
  getToken(e: any){
    this._srvc.userLoggedIn = true 
  //   console.log("We have acquired Token")
  //   if(e){
  //     e.preventDefault(); //prevents default form behavior
  //   }
  //   let email=this.signInForm.value.username;
  //   let passw= this.signInForm.value.password;
  //   console.log(email);
  //   console.log(passw);
  //   delay(5000);
  //   // return this.auth.signInWithEmailAndPassword(email, passw); 
  //   // this.auth = new firebase.auth.GoogleAuthProvider();
  //   //this._srvc.loginUser({username:this.signInForm.value.username}, {password:this.signInForm.value.password})
  //   delay(5000);
  //   this._srvc.loginUser(email, passw)
  //   .then((result) => {
  //     console.log("result object..:"+result);
  //     if(result == null) //null result value means success
  //       console.log("Successfully signed in user in firebase!");
  //     else if(result.isValid == false) //false result means an error
  //     {
  //       console.log("conection to firebase return not logged")
  //       this.firebaseErrorMessage = result.message
  //     }
  //   });


    this.router.navigate(['/frontpage'])
  //   //let id_token = googleUser.getAuthResponse().id_token;

  }

}

