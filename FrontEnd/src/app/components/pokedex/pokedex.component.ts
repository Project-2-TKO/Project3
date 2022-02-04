import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Pokedex } from 'src/app/models/pokedex';
import { Observable } from 'rxjs';
import { PokeDataService } from 'src/app/poke-data.service';


const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})


export class PokedexComponent implements OnInit {

  user:string;
  userId: string;
  pokedex: any = [];
  pokemon_id: any = [];
  // pokedexInventory: any = [];

  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  // public user = window.localStorage.getItem("username"); //might need to grab user_ID? unless its already saved in storage

  constructor(private _http : HttpClient, private ps: PokeDataService) { }

  ngOnInit(): void {
    this.getPokeDexByUserId(1).subscribe( //instead of 2, I would put userId
      (data:any) =>{
        this.pokedex = data;
        //let response: String = data.response;
        console.log(this.pokedex)
        for(let resp of data.body){
          console.log(resp);
          this.pokemon_id = resp.pokemon_id; // if more pokemon id, might need to push instead
          console.log(this.pokemon_id); 
            this.ps.getPokemonById(this.pokemon_id).subscribe(

              //get the data out of the observable that we subscribe to, and put it into a Pokemon object
              (data:any) => {
                let response:String = data.status;//gets the status code
                console.log(response);
                //assign it to our pokemon variable above
                this.pokemon_id = data.body;
                //we may have to do something with sprites
                console.log(this.pokemon_id) //will be helpful for debugs
              },
          
              () => { //incase of errors, set pokemon object to null since we didn't get anything back
                this.pokemon_id = null
                console.log("It got away!!!")
              }
            )
          

        }
      }
    );
  }

  getPokeDexByUserId(userId: any):Observable<HttpResponse<Pokedex>>{
    return this._http.get("http://localhost:3000/pokedex/user/" + userId, {observe: "response"}) as Observable<HttpResponse<Pokedex>>
  }
}
