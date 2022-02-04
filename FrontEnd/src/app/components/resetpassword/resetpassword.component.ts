import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  
  username!: String;
  password?: String;
  email_address!:String;
  credit_card_name!:String;
  credit_card_number!:String;
  first_name!:String;
  Last_name!:String;
  Phone_number!:String;
  Physical_address!: String;
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


  resetpasswordusr(){
   // if(this.username == this.username)
    //{
      let userID=1;
      let user = {username:      this.username,
                  password:      this.password,
                  email_address: this.email_address,
                  credit_card_name : this.credit_card_name,
                  credit_card_number : this.credit_card_number,
                  first_name: this.first_name,
                  Last_name: this.Last_name,
                  Phone_number: this.Phone_number,
                  Physical_address: this.Physical_address
                };
      console.log(this.username);
      console.log(this.password);
      console.log(user);
      let Credentials = {withCredentials: true};
      let response =this._http.put<any>("http://localhost:3000/user/userID",user,httpOptions,).subscribe (
        {
          next: (v) => this.router.navigate(['/']),  //console.log("reponse rcieved"),
          error: (e) => console.error(this.msgError="User name or password is undefined "),
          complete: () => console.info('Complete')
        });

      console.log(response);
 /* }
  else
  {
    this.msgError="passwords does not update, please revalidate your password"
  }*/
  }

}
