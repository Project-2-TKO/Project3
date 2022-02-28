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
        user.getIdToken().then((token) => {//THIS LINE GETS JWT
          this.userToken = token; //ASSIGN JWT TO USER TOKEN TO PASS TO HEADER IN LOGIN AND SIGNUP COMPONENTS
          // console.log(this.userToken); //THIS WORKS!!!
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
  

  //   //let fireAuth = this.afAuth.signInWithEmailAndPassword(email, password)
  //   this.afAuth.signInWithEmailAndPassword(email, password)
  //   .catch(function(error)
  //   {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     if (errorCode === 'auth/wrong-password') {
  //       alert('Wrong password.');
  //     } else {
  //     alert(errorMessage);
  //   }
  //   console.log(error);
  //   });
  //   return this.afAuth.signInWithEmailAndPassword(email, password)
  //   .then(() => {
  //     console.log("Auth Service: login User successful");
  //   })
  // }

// function onSignIn(firebaseUser: { getAuthResponse: () => { (): any; new(): any; id_token: any; }; }){
//   let id_token = firebaseUser.getAuthResponse().id_token;
// }
// function signInWithEmailAndPassword(auth: any, email: string, password: string) {
//   throw new Error('Function not implemented.');
// }

  
}
