import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private pokeService: PokeDataService) {}
  
 

  handleEvent() {
    this.pokeService.getRequest("https://pokeapi.co/api/v2/pokemon/?limit=100")
    .subscribe((response) =>
     console.log(response.results));
  
    this.pokeService.getRequest("https://pokeapi.co/api/v2/pokemon/charmander")
    .subscribe((response) => console.log(response));
  }

  ngOnInit(): void {
    
  }

}
