import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  username: String;
  password:String;
  user = {username: String, password: String};
  constructor() { }

  ngOnInit(): void {
  }
  resetpasswordnusr(){
    let user = {username: this.username,
                password: this.password};

    let Credentials = {withCredentials: true};
    console.log(this.username);
    console.log(this.password);
    console.log(user);
    console.log(Credentials);
    let response = this._http.put<any>("http://localhost:3000/login", user, httpOptions ).subscribe ({
      next: (v) => this.router.navigate(['/frontpage']),  //console.log("reponse rcieved"),
      error: (e) => console.error(this.msgError="Invalid Credentials, Please Enter a Valid User Name And/or Password"),
      complete: () => console.info('Complete')
    }
    );
  }

}
