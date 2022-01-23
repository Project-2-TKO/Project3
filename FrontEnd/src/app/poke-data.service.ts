import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  // getData(url:string){
  //   return this.http.get(url)
  // }

  constructor(private http:HttpClient) { }

  // FIRST WAY
  // getRequest(url: string): void {
  //   this.http.get(url).subscribe((response) => {
  //     console.log(response);
  //   })
  // }

  //SECOND WAY [ Reusable service to perform GET, POST, UPDATE] | done in the frontpage.component.ts |
  //RESOURCE [https://angular.io/guide/http]

  //GET
  getRequest(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError((err, caught) => caught)
    );
  }

  //POST
  postRequest(url: string, data: any, option?: any): Observable<any>{
    return this.http.post(url, data, option).pipe(
      catchError((err, caught) => caught)
    );
  }

  //UPDATE
  updateRequest(url: string, data: any, option?: any): Observable<any>{
    return this.http.put(url, data, option).pipe(
      catchError((err, caught) => caught)
    );
  }

  //HANDLE HTTP ERRORS FROM ANGULAR DOCS
  // handleError code not working so probably don't need 
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      console.error('An error occurred:', error.error.message);
    }else{
      // The backend returned an unsuccessful response code
      // The response body may contain clues as to what went wrong
      console.error(
        `Backend returned code ${error.status},` + 
        `body was:`, error.error
      );
    }
    // Return an observable with a user-facing error message
    const err = 'Something bad happened; please try again';
    throwError(() => err);
    //bottom code DEPRECATED
    // return throwError(
    //   'Something bad happened; please try again later.'
    // );


  }
}

//NOTES
//Services allows you to reuse the logic or functionality into different parts of application
//also for organizing code
//APIs should be in the services so that reduce writing the same code again and again | reduce redundancy 