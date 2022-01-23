import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //BrowserModule is required for all browser based application
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// AngularMaterialModule 
import { AngularMaterialModule } from './angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  //declarations : the components, directives, and pipes that belong to this NgModule
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterComponent,
    SearchbarComponent,
    UserprofileComponent,
    NavbarComponent,
  ],
  //imports : other modules whose exported classes are needed by component templates declared in this NgModule
  imports: [
    BrowserModule, // required browser applications
    AppRoutingModule, // for routing
    HttpClientModule, // for http GET,POST,PUT,DELETE
    FormsModule, // for forms
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  //app.module.ts doesn't require exports here b/c it's the root of the application but it is a subset of declarations
  // that should be visible and usable in the component templates of other NgModules
  //exports: [],
  //providers: creators of services that this NgModule contributes to the global collection of services, they become accessible
  //in all parts of the app
  providers: [],
  //bootstrap: the main application view, called the root component which hosts all other app views. Only the root NgModule should set the
  //boostrap property
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
