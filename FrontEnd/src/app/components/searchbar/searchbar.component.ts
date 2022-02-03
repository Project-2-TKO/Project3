import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-searchbar',
  template:`
  <div>
        <div class="row" style="margin-left:50%">
        <!-- Two way binding this input field to a variable called input in pokedex.component.ts -->
        <input class="col-lg-3" type="string" [(ngModel)] = "name"/>
        <!--Event binding on this button to call the getPoke() function in pokedex.component.ts-->
        <button class=" btn btn-dark col-lg-2" (click)= "getPokemon()">Choose Pokemon</button>
    </div>

    
        <div class='card_body' *ngIf="pokemon">
            <mat-card class='pokemon_cards'>
                <mat-card-title>
                    {{pokemon.name}}
                </mat-card-title>
                <mat-card-content>
                    {{pokemon.type}}
                </mat-card-content>
                <img mat-card-sm-image src="{{pokemon.sprites.front_default}}">
                <mat-card-subtitle>
                    $180.99
                </mat-card-subtitle>
                <mat-card-actions>
                    <button mat-raised-button>Add to Cart</button>
                </mat-card-actions>
            </mat-card>
        </div>

</div>

  `,
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  public name: string = '';
  public pokemon: any = "placeholder";
  
  constructor(private ps: PokeDataService) { }

  ngOnInit(): void {
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
    },

    () => { //incase of errors, set pokemon object to null since we didn't get anything back
      this.pokemon = null
      console.log("It got away!!!")
    }
  )
}
}
