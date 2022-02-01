import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public name: string = '';
  public pokemon: any = "placeholder";
  
  constructor(private ps: PokeDataService) {}



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
