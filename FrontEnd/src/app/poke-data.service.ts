// import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, forkJoin, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs';

import { Pokemon } from './pokemon';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

//new
import { Inject, Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class PokeDataService{
  constructor(private http:HttpClient) {}

  getPokemonFromApi(name:string):Observable<HttpResponse<Pokemon>>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + name + "/", {observe: "response"})as Observable<HttpResponse<Pokemon>>
  }

  sendPokemonToApi(pokemon: Pokemon):Observable<Pokemon>{
    let p:Observable<Pokemon> = this.http.post("localhost:4200/cart", pokemon) as Observable<Pokemon>
    
    return p;

  }


}


  // // pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  // // private handleError: HandleError;
  // display = new BehaviorSubject<boolean>(false)
  // constructor(
  //   private http: HttpClient,
  //   @Inject('pokemonListApi') private pokemonListApi: string,


//   getPokemons(): Observable <any> { //any or unknown?
//     return this.http.get<Pokemon>(this.pokemonListApi).pipe (
//       map((x) => x.results),
//       switchMap(x => forkJoin(this.nameUrl(x))),
//       map(x => x.map(x => {
//         return {name:x.name, sprites:x.sprites}
//       })),
//       tap((x) => console.log(x))
//     );
//   }

//   nameUrl(arr: Pokemon[]): Observable<Pokemon>[] {
//     const res = <any>[];
//     arr.forEach((x: Pokemon) => {
//       res.push(this.http.get(`${this.pokemonListApi}/${x.name}`));
//     });
//     return res;
//   }
// }


//NOTES
//Services allows you to reuse the logic or functionality into different parts of application
//also for organizing code
//APIs should be in the services so that reduce writing the same code again and again | reduce redundancy 