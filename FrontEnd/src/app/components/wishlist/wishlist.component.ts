import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Pokedex, UserId, Wishlist } from 'src/app/models/pokedex';
import { Observable, window } from 'rxjs';
import { PokeDataService } from 'src/app/poke-data.service';
import { LoginComponent } from '../login/login.component';
import { Pokemon } from 'src/app/pokemon';
//import { LocalStorage } from '@ngx-pwa/local-storage';


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
  obj:any = [];
  wishlist: any = [];
  mylist: any = [];
  //localStorage: LocalStorage;
   username= localStorage.getItem("username") ;
    //user=localStorage.getItem("user") ;
  userId: string;
  pokemonId: string;
  userInfo: any = [];
  pokemon_id: any = [];
  public pid: string = '';
  // pokedexInventory: any = [];
user:any;
  pokemonArray: any = [];
  pokemonArray2: any = [];
  //public lusername= window.localStorage.getItem("username");
  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  
  constructor(private _http : HttpClient, private ps: PokeDataService
    ) {}



  removeWishlist(pokemonid:number)
  {
   
    this.wishlist.pop();
    let response=this._http.delete("http://localhost:3000/delete/"+ pokemonid )
    .subscribe( (data: any)=>{console.log(data);});
  
  }

  addPokemon(pokemon: Pokemon){

    /*let response=this._http.post("http://localhost:3000/pokedex/"+ pokemon.id  +"/"+this.username ,null)
    .subscribe( (data: any)=>{console.log(data); 
  
      pokemon.wishListId=data;
    this.ps.wishList.push(pokemon);
    let price: number = (((pokemon.id * .01) * 543) * .5);
    this.ps.totalCost += price; */
      
    
    console.log(pokemon);
    
   // this.ps.wishList.push(wlst);
    this.ps.pokemonList.push(pokemon);
    let price: number = (((pokemon.id * .01) * 543) * .5);
    this.ps.totalCost += price; 
    console.log(this.ps.totalCost)
    console.log(typeof this.ps.totalCost)
    this.removeWishlist(pokemon.id);
  }
  
  ngOnInit(): void {

    console.log(this.wishlist);
    this.wishlist;
  

    this.getUserId(this.username).subscribe(
      (data:any) =>{
        this.user = data.body;
        let x = this.user.first_name;
        for (let x of this.user){
        this.userId = x.user_id;
        this.getWishlistByUserId(this.userId).subscribe(
          (data:any) =>{
            this.user = data.body;
            // console.log(this.user)
            this.user.forEach((result: {pokemon_id: string, wishlist_id: string}) => {
              this.ps.getPokemonById(result.pokemon_id).subscribe(
                (res:any) => {
                  const wish = {pokeInfo: res.body, wishlistid: result.wishlist_id};
                  // console.log(wish);

                  this.wishlist.push(wish);
                }

              )
            })
          }
        );

        }
      }
    );
              }

  saveWishlist()
  {
    // console.log("user " + this.user +" user name " +this.username);
    //let username = JSON.parse(window.arguments);
       //hard coded username as abc which exists in dba
       //mylist is array of ints represnts pokemon ids               
      let response=this._http.post("http://localhost:3000/wishlist/"+this.username ,this.mylist)
      .subscribe( (data)=>{console.log(data);});

  }
  getWishlistByUserId(userId: any):Observable<HttpResponse<Pokedex>>{
    return this._http.get("http://localhost:3000/wishlist/user/" + userId,
     {observe: "response"}) as Observable<HttpResponse<Wishlist>>
  }

  getUserId(user:any):Observable<HttpResponse<UserId>>{
    return this._http.get("http://localhost:3000/user/username/" + user, {observe: "response"}) as Observable<HttpResponse<UserId>>
  }
}
function arr(arg0: string, arr: any) {
  throw new Error('Function not implemented.');
}



