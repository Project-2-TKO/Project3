import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  isVisible: boolean = false;
  public name: string = '';
  public pokemon: any = "placeholder";
  
  constructor(private ps: PokeDataService) { }

  ngOnInit(): void {
  }


  //getting pokemon by name in search bar
getPokemon():void{
  this.isVisible = true;
  this.ps.getPokemonFromApi(this.name).subscribe(
  

    //get the data out of the observable that we subscribe to, and put it into a Pokemon object
    (data:any) => {
      let response:String = data.status;//gets the status code
      console.log(response);
      //assign it to our pokemon variable above
      this.pokemon = data.body;
      //we may have to do something with sprites
      console.log(this.pokemon) //will be helpful for debugs
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
}
