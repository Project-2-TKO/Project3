import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from '../../pokemon';
import { map } from 'rxjs';
// import { concat, Subscription } from 'rxjs';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  providers: [PokeDataService],
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokeService: PokeDataService) {}
  
  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokeService.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(pokemons);
      

      // pokemons.map(response => console.log(response));
    })
  }
//   get pokemons(): any[] {
//     console.log(this.pokeDataService.pokemons)
//     return this.pokeDataService.pokemons;
//   }

  // pokemonInfo: any = [];
  

  // handleEvent() {
  //   this.pokeService.getRequest("https://pokeapi.co/api/v2/pokemon/?limit=100")
  //   .subscribe((response) =>
  //    console.log(response.results));


     //need to figure out how to look through each pokemon since I got the data response in the console.

     //then do another request with that pokemon's url with id to get more information on the specific pokemon
    
  
    // this.pokeService.getRequest("https://pokeapi.co/api/v2/pokemon/charmander")
    // .subscribe((response) => console.log(response));
  // }

  // ngOnInit(): void {
  // }
}
