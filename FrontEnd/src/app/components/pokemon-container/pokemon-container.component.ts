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
  
  public name: string = '';
  public pokemon: any = "placeholder";

  constructor(private ps: PokeDataService) {}
  
  ngOnInit(): void{
    
  }
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
    },

    () => { //incase of errors, set pokemon object to null since we didn't get anything back
      this.pokemon = null
      console.log("It got away!!!")
    }


  )
}
}
