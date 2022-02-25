import { ThemeService } from 'src/app/services/theme.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { PokeDataService } from './poke-data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


// By convention, app component is also known as root component
@Component({
  //component's metadata | metadata tells Angular where to get the major building blocks that it needs to create and present the component
  //and it's view. View: the component and it's template
  // There is also provider as the metadata, but Angular doesn't provide that as default b/c you have multiple ways to inject providers.
  //Either by Root provider or component provider
  selector: 'app-root', // selector is something that Angular understands which tells it where to place the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] //we have an array for style b/c we can include multiple css files
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';

  constructor (private themeService: ThemeService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.themeService.themeChanges().subscribe(theme => {
      if (theme.oldValue) {
        this.renderer.removeClass(document.body, theme.oldValue);
      }
      this.renderer.addClass(document.body, theme.newValue);
    })
  }
}
