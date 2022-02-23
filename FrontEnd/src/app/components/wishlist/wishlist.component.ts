import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Pokedex, UserId, Wishlist } from 'src/app/models/pokedex';
import { Observable, window } from 'rxjs';
import { PokeDataService } from 'src/app/poke-data.service';
import { LoginComponent } from '../login/login.component';
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

