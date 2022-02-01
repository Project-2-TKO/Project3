import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from '../../pokemon';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  // providers: [PokeDataService],
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {
  
  display: boolean = false;
  // poke:any;
  pokemons: Pokemon[] = [];
  // Object = Object;
  // values = Object.values(this.arrayOfObjects);
  pokemonList: any=[];
  constructor(private pokeService: PokeDataService) {}
  
  ngOnInit(): void{
    this.pokeService.getPokemons().subscribe((x) => {
      this.pokemonList.push(x)
      console.log(this.pokemonList);
      console.log(this.pokemonList);
      console.log(this.pokemonList);
    })
    // this.checks();
  }
  // checks(): any {
  //   console.log(this.pokemonList);
  // }
  // getPokemons(): any{
  //   this.pokeService.getPokemons()
  //   .subscribe(pokemons => {
  //     this.pokemons = pokemons;
  //     return pokemons;
      // console.log(pokemons);
      // pokemons.map(response => console.log(response));
    // })

//   }
//     )}
}
