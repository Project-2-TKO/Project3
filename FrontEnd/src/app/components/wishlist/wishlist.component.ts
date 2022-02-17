import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: any = [];

  pokemon: any = null;
  
  constructor(private ps: PokeDataService) {}

  ngOnInit(): void{

    this.pokemon = this.ps.pokemon

    this.wishList = this.ps.wishList

  }

}
