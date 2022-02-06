import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Pokedex, UserId } from 'src/app/models/pokedex';
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

  user = window.localStorage.getItem("username") ;
  userId: string;
  pokemonId: string;
  pokedex: any = [];
  userInfo: any = [];
  pokemon_id: any = [];
  public pid: string = '';
  // pokedexInventory: any = [];

  pokemonArray: any = [];
  pokemonArray2: any = [];

  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  // public user = window.localStorage.getItem("username"); //might need to grab user_ID? unless its already saved in storage

  constructor(private _http : HttpClient, private ps: PokeDataService) { }

  ngOnInit(): void {
    this.getUserId(this.user).subscribe(
      (data:any) => {
        this.userInfo = data;
        // console.log(this.userInfo);
        for(let response of data.body){
          this.userId = response.user_id;
          this.getPokeDexByUserId(this.userId).subscribe(
            (data2:any) => {
              this.pokedex = data2;
              console.log(this.pokedex);
              data2.body.forEach((result: {pokemon_id: string}) => {
                // console.log(result.pokemon_id);
                this.ps.getPokemonById(result.pokemon_id).subscribe(
                  (res:any) => {
                    
                    this.pokemonArray.push(res.body);
                    console.log(this.pokemonArray);
                  }

                )
              })
            }
          )
        }
      }
    )
  }

  getPokeDexByUserId(userId: any):Observable<HttpResponse<Pokedex>>{
    return this._http.get("http://localhost:3000/pokedex/user/" + userId, {observe: "response"}) as Observable<HttpResponse<Pokedex>>
  }

  getUserId(user:any):Observable<HttpResponse<UserId>>{
    return this._http.get("http://localhost:3000/user/username/" + user, {observe: "response"}) as Observable<HttpResponse<UserId>>
  }
}
