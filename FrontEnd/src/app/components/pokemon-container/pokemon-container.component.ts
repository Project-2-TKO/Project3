import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from '../../pokemon';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  providers: [{provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true }}],
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {
  collapsed = true;
  public name: string = '';
  public pokemon: any = "placeholder";
  public pokemonArray: Array<Pokemon> = [];
  public pokeDataArray: any[] = []; //might be this
  

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

  constructor(private ps: PokeDataService) {}
  
  ngOnInit(): void{
    // this.ps.getAllPokemons()
    // .subscribe((response: any) => {
    //   response.results.forEach(result => {
    //     this.ps
    //   })
    // })
    this.getAllPokemons();
   
}

getAllPokemons(){
  this.ps.getAllPokemons().subscribe(
    (response: any) => {
      // console.log(response);
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
          
          console.log(data.name);
          // if(this.pokeDataArray[data].name)
          // console.log(this.pokeDataArray[1].id)
          // console.log(this.pokeDataArray[1].name)
      //     console.log(this.pokeDataArray);
      // console.log(data)
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
addPokemon(pokemon: Pokemon){
  console.log(pokemon);
  this.ps.pokemonList.push(pokemon);
  let price: number = ((pokemon.id * .01) * 543);
  this.ps.totalCost += price; 
  console.log(this.ps.totalCost)
  console.log(typeof this.ps.totalCost)
}
getRandomNum(){
  return (Math.random()*(500)+1.00).toFixed(2);
}

}
