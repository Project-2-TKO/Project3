import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

import { Pokemon } from './pokemon';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('PokeDataService');
    }

  /* GET POKEMON FROM THE API HOPEFULLY */
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokeUrl)
    .pipe(
      catchError(this.handleError('getPokemons', []))
    );
  }

}


// Testing another method
// export class PokeDataService {
//   private url: string = "https://pokeapi.co/api/v2/pokemon/";
//   private _pokemons: any[] = [];
//   private _next: string = '';

//   constructor(private http: HttpClient) {
//   }

//   get pokemons(): any[] {
//     return this._pokemons;
//   }

//   get next(): string {
//     return this._next;
//   }

//   set next(next: string){
//     this._next = next;
//   }

//   getType(pokemon: any): string {
//     return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name:'';
//   }

//   get(name: string): Observable<any> { //<any> not sure if this would work, assuming any data types?
//     const url = `${this.url}${name}`;
//     return this.http.get<any>(url);
//   }
 
//   getNext(): Observable<any> {
//     const url = this.next === '' ? `${this.url}?limit=100` : this.next;
//     return this.http.get<any>(url);
//   }


// }
//*******************************************[ Important ]*************************************************************************** */
// export class PokeDataService {

//   // getData(url:string){
//   //   return this.http.get(url)
//   // }

//   constructor(private http:HttpClient) { }

//   // FIRST WAY
//   // getRequest(url: string): void {
//   //   this.http.get(url).subscribe((response) => {
//   //     console.log(response);
//   //   })
//   // }

//   //SECOND WAY [ Reusable service to perform GET, POST, UPDATE] | done in the frontpage.component.ts |
//   //RESOURCE [https://angular.io/guide/http]

//   //GET
//   getRequest(url: string): Observable<any> {
//     return this.http.get(url).pipe(
//       catchError((err, caught) => caught)
//     );
//   }

//   //POST
//   postRequest(url: string, data: any, option?: any): Observable<any>{
//     return this.http.post(url, data, option).pipe(
//       catchError((err, caught) => caught)
//     );
//   }

//   //UPDATE
//   updateRequest(url: string, data: any, option?: any): Observable<any>{
//     return this.http.put(url, data, option).pipe(
//       catchError((err, caught) => caught)
//     );
//   }

//   //HANDLE HTTP ERRORS FROM ANGULAR DOCS
//   // handleError code not working so probably don't need 
//   handleError(error: HttpErrorResponse) {
//     if(error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly
//       console.error('An error occurred:', error.error.message);
//     }else{
//       // The backend returned an unsuccessful response code
//       // The response body may contain clues as to what went wrong
//       console.error(
//         `Backend returned code ${error.status},` + 
//         `body was:`, error.error
//       );
//     }
//     // Return an observable with a user-facing error message
//     const err = 'Something bad happened; please try again';
//     throwError(() => err);
//     //bottom code DEPRECATED
//     // return throwError(
//     //   'Something bad happened; please try again later.'
//     // );


//   }
// }

//NOTES
//Services allows you to reuse the logic or functionality into different parts of application
//also for organizing code
//APIs should be in the services so that reduce writing the same code again and again | reduce redundancy 