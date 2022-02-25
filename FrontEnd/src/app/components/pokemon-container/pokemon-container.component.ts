import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from 'src/app/pokemon';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { map, Observable, Subscription } from 'rxjs';
import { ReviewpageComponent } from '../reviewpage/reviewpage.component';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { PokeReviewService } from 'src/app/poke-review.service';

export interface WishListItem{
  wishListId:number;
  pokemonId:number;
 user:User;
}
@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  providers: [{provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true }}],
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {
   username=window.localStorage.getItem("username");
  collapsed = true;
  public name: string = '';
  public pokemon: any = "placeholder";
  public pokemonArray: Array<Pokemon> = []; //comment out?
  public pokeDataArray: any[] = []; //might be this
  public rating:any[]=[];
  
  //wishlist
  public wishlist: Array<Pokemon> = [];
  public wishlist2: Array<WishListItem> = [];

  //featuredPokemon
  public sales: any[] = [];
  public sales2: any[] = [];

  //for carousel
  // slides = [{image: '../../assets/zaptos.jpg', text: this.pokemon}];
  noWrapSlides = false;
  showIndicator = true;
  

  message: string = "";

  subscription: Subscription = new Subscription();

  public input: number = 0;

  

  p: number = 0;
  totalPokemon: number;
  pokemonId: any;
  wishlistId: any;
  loginUser: User ;
  

  constructor(private _http: HttpClient,private ps: PokeDataService, private rs: PokeReviewService) {}
  ngOnInit(): void{
    // .subscribe((response: any) => {
    //   response.results.forEach(result => {
    //     this.ps
    //   })
    // })
    this.getAllPokemons();
    //this.reviews(this.ps.pokemonid);
}

getAllPokemons(){
  this.ps.getAllPokemons().subscribe(
    (response: any) => {
      console.log(response);
      response.results.forEach((result: { name: string; }) => {
        this.ps.getDetails(result.name)
        .subscribe((data: any) => {
          if(data.name == 'bulbasaur' || data.name == 'charmander' || data.name == 'squirtle' || data.name == 'pikachu' || data.name == 'meowth'){
            this.sales.push(data);
          }else if(data.name == 'articuno' || data.name == 'moltres' || data.name ==  'zapdos'){
            this.sales2.push(data);
          }else{
            this.pokeDataArray.push(data);
          }
        })
      })
    
  
  // )
})
}

//getting pokemon by name in search bar
getPokemon():void{
  this.ps.getPokemonFromApi(this.name).subscribe(

    //get the data out of the observable that we subscribe to, and put it into a Pokemon object
    (data:any) => {
      let response:String = data.status;//gets the status code
      console.log(response);
      //assign it to our pokemon variable above
      this.pokemon = data.body;
      //we may have to do something with sprites
      console.log(this.pokemon) //will be helpful for debugs
    
      this.ps.counter++;

      this.ps.changeMessage("number of Pokemon found: " + this.ps.counter)
      this.ps.pokemon = data.body;
    },

    () => { //incase of errors, set pokemon object to null since we didn't get anything back
      this.pokemon = null
      console.log("It got away!!!")
    }
  )
}
// getUser():Observable<Array<User>>
// {
//    return this._http.get("http://localhost:3000/username/"+this.username) as Observable<Array<User>>;
  
// }
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
}

getRandomNum(){
  return (Math.random()*(500)+1.00).toFixed(2);
}


reviews(id:number){
  
  this.rs.getAllReviewByPokemonId(id).subscribe(
    (data:any) => {
      console.log(data.body)
      this.rs.reviewsarray=data.body;
      this.rating=data.body.rating;
      console.log(this.rating)
      //this.rating=data.body.rating;
     // console.log(data.body)
     // console.log(this.rs.reviewsarray)
      //this.rp.getreviews(id);
    }
  )
}

//WISHLIST
//get method to grab user details with username
//create a method/function that would be called on wishlist button click that would http post the 
//pokemon to the database linked with the user id.
// note we are pushing the pokemon id and user id to db
addWishlist(pokemon: Pokemon){
  console.log(pokemon);
    /*pokemon.wishListId=this.wishlistId;
  this.ps.wishList.push(pokemon);
  let price: number = (((pokemon.id * .01) * 543) * .5);
  this.ps.totalCost += price; */
  console.log("user name and pokemon id " +this.username + "///"+pokemon.id);
  let response=this._http.post("http://localhost:3000/wishlist/"+ pokemon.id  +"/"+this.username ,null)
  .subscribe( (data: any)=>{console.log(data); 

    pokemon.wishListId=data;
  this.ps.wishList.push(pokemon);
  let price: number = (((pokemon.id * .01) * 543) * .5);
  this.ps.totalCost += price; 
    
    });

}
// saveWishlist(){
//   this.wishlist
// }
}
