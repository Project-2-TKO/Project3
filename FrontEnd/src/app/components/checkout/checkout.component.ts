import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { PokeDataService } from 'src/app/poke-data.service';

const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component(
  {
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
  })
export class CheckoutComponent implements OnInit
{
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
          last_name: String,
          phone_number: String,
          physical_address: String
};
  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  public lusername= window.localStorage.getItem("username");

  s_username: any;
  totalCost: any = 0;
  pokemon_id: any = 0;
  mon:any =0;
  pokemonList: any = [];
  message: string = "";

  subscription : Subscription = new Subscription();
  pokemon: any = null;
  constructor(private ps: PokeDataService, private _http : HttpClient, private router : Router) { }

  getUserByUsername(lusername : any):Observable<HttpResponse<User>>{
    return this._http.get("http://localhost:3000/user/username/" +lusername+"/", {observe: "response"}) as Observable<HttpResponse<User>>
    }

  ngOnInit(): void
  {

    this.subscription = this.ps.currentMessage.subscribe(serviceMessage => this.message = serviceMessage)

    this.pokemon = this.ps.pokemon



    this.pokemonList = this.ps.pokemonList

    this.totalCost = this.ps.totalCost;

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
            this.lname=usr.last_name;
            this.phnum=usr.phone_number;
            this.phadd=usr.physical_address;
            this.ccnum=usr.credit_card_number;
            this.ccname=usr.credit_card_name;
            this.usrID=usr.user_id;
            this.password=usr.password;
          }
        }
      );
  }

  //-------REQUEST TO POST POKEMON IN POKEDEX-----------///



  inject(): void
    {
      setTimeout(() => {
      for(var i = 0; i < this.pokemonList.length; i++)
      {

            this.pokemon_id = this.pokemonList[i].id
             this.insertPokemon(this.pokemon_id)

            console.log(this.pokemon_id);

          // }
        }
      }, 5000);
    }




  insertPokemon(pokemon_id :any)
  {
    let user = {
      user_id: this.usrID,
      username: this.username,
      password: this.password,
      first_name: this.fname,
      last_name: this.lname,
      email_address: this.email,
      phone_number: this.phnum,
      physical_address: this.phadd,
      credit_card_name : this.ccname,
      credit_card_number : this.ccnum
    };
    let pokedex = {
                  pokemon_id:      this.pokemon_id,
                  user:      user//this.usrID ///user id, pokemon id
                };
console.log(this.usrID);
console.log(this.pokemon_id);
console.log(this.user);
console.log(pokedex);

      let Credentials = {withCredentials: true};
      let response =this._http.post<any>("http://localhost:3000/pokedex",pokedex ,httpOptions,).subscribe (
        {
          next: (v) => this.router.navigate(['/frontpage']),  //console.log("reponse rcieved"),
          error: (e) => console.error(this.msgError="Could not enter"),
          complete: () => console.info('Complete')
        });

      console.log(response);
  }
}
