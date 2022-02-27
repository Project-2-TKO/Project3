import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = window.localStorage.getItem("username") ;
  constructor(private _afAuth: AngularFireAuth) { }

  ngOnInit(): void {

  }
  logout(): void {
    this._afAuth.signOut();
  }
}
