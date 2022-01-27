import { Component } from '@angular/core';
import { PokeDataService } from './poke-data.service';

// By convention, app component is also known as root component
@Component({
  //component's metadata | metadata tells Angular where to get the major building blocks that it needs to create and present the component
  //and it's view. View: the component and it's template
  // There is also provider as the metadata, but Angular doesn't provide that as default b/c you have multiple ways to inject providers.
  //Either by Root provider or component provider
  selector: 'app-root', // selector is something that Angular understands which tells it where to place the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //we have an array for style b/c we can include multiple css files
})
export class AppComponent {
  title = 'FrontEnd';

  // handleEvent() {
  //   console.log('button Clicked', this.title)
  // }

  // testing http get pokemon
  constructor(private pokeService: PokeDataService) {}

  handleEvent() {
    this.pokeService.getRequest("https://pokeapi.co/api/v2/pokemon");
  }
}
