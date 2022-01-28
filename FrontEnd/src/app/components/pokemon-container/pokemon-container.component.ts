import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Pokemon } from '../../pokemon';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  providers: [PokeDataService],
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {

  poke:any;
  pokemons: Pokemon[] = [];
  Object = Object;
  values = Object.values(this.pokemons);

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
}
