import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  userLoggedIn!: boolean;
  userToken:any; //holding firebase userToken
  

  constructor(private router: Router, private afAuth: AngularFireAuth) {

    this.userLoggedIn = false;

     this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.userLoggedIn = true; 
        user.getIdToken().then((token) => {
          this.userToken = token; 
        })
      } else {
        this.userLoggedIn = false; 
        // this.afAuth; 
      }
    });
  }

  
   

   signupUser(user:any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      let emailLower = user.email.toLowerCase();
      result.user?.sendEmailVerification(); //send user email verification
    });
   }

   loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      result.user?.getIdToken().then(idToken => {
        this.userToken = idToken; 
      });
      console.log("Auth Service: login User successful");
      console.log("this is the firebase JWT" + this.userToken); //this works
    })
  }

}
