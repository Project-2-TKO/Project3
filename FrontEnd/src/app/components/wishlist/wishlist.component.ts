import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Pokedex, UserId, Wishlist } from 'src/app/models/pokedex';
import { Observable, window } from 'rxjs';
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
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist: any = [];
  mylist: any = [];
  //user = window.localStorage.getItem("username") ;
  userId: string;
  pokemonId: string;
  userInfo: any = [];
  pokemon_id: any = [];
  public pid: string = '';
  // pokedexInventory: any = [];

  pokemonArray: any = [];
  pokemonArray2: any = [];

  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  
  constructor(private _http : HttpClient, private ps: PokeDataService) {}




  ngOnInit(): void {
    this.wishlist=this.ps.wishList;
    for(let w of this.wishlist)
      this.mylist.push( w.id);
   /* this.getUserId(this.user).subscribe(
      (data:any) => {
        this.userInfo = data;
        // console.log(this.userInfo);
        for(let response of data.body){
          this.userId = response.user_id;
          this.getWishlistByUserId(this.userId).subscribe(
            (data2:any) => {
              this.wishlist = data2;
              console.log(this.wishlist);
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
    )*/
  }
  saveWishlist()
  {
   /* let username = JSON.parse(localStorage.getItem("username"));*/
                      
      let response=this._http.post("http://localhost:3000/wishlist/abc" ,this.mylist)
      .subscribe( data=>console.log(data));

  }
  getWishlistByUserId(userId: any):Observable<HttpResponse<Pokedex>>{
    return this._http.get("http://localhost:3000/wishlist/user/" + userId, {observe: "response"}) as Observable<HttpResponse<Wishlist>>
  }

  getUserId(user:any):Observable<HttpResponse<UserId>>{
    return this._http.get("http://localhost:3000/user/username/" + user, {observe: "response"}) as Observable<HttpResponse<UserId>>
  }
}
function arr(arg0: string, arr: any) {
  throw new Error('Function not implemented.');
}

