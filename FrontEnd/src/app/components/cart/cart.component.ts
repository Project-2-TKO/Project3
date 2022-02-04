import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  totalCost: any = 0;

  pokemonList: any = [];
  message: string = "";

  subscription : Subscription = new Subscription();

  pokemon: any = null;
  
  constructor(private ps: PokeDataService) {}

  ngOnInit(): void{

    this.subscription = this.ps.currentMessage.subscribe(serviceMessage => this.message = serviceMessage)

    this.pokemon = this.ps.pokemon

    

    this.pokemonList = this.ps.pokemonList

    this.totalCost = this.ps.totalCost

  }
  delete(): void{
    this.delete = this.ps.pokemon
  }

}
