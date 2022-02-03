import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from '../../pokemon';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  // providers: [PokeDataService],
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {
  collapsed = true;
  public name: string = '';
  public pokemon: any = "placeholder";
  public pokemonArray: Array<Pokemon> = [];
  public pokeDataArray: any[] = []; //might be this

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
  console.log(this.p);
  this.ps.getAllPokemons(151, this.p + 0).subscribe(
    (response: any) => {
      this.totalPokemon = response.count;
      
      // console.log(response);
      response.results.forEach((result: { name: string; }) => {
        this.ps.getDetails(result.name)
        .subscribe((data: any) => {
          this.pokeDataArray.push(data);
          console.log(this.pokeDataArray);
      })
    }
  
  )

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
showId(num: number){
  console.log(num);
}
getRandomNum(){
  return (Math.random()*(500)+1.00).toFixed(2);
}
//get all pokemons into an array
// getAllPokemons(): void {
//   this.ps.getAllPokemons().subscribe(
//     (data:any) => {
//       for( let details of data ){
//         this.pokemonArray.push(details);
//         // console.log(this.pokemonArray);
//       }
//       for(let pokeData of this.pokemonArray){
//         this.pokeDataArray.push(pokeData);
//         console.log(pokeData.id);
//         console.log(pokeData.name);
//         console.log(pokeData.types);
        
//       }
//       console.log(this.pokeDataArray)
//       // console.log(this.pokemonArray); // now we can use *ngFor to loop through this array?
//     }
//   )
// }


}
