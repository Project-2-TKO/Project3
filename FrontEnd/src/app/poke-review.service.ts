import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { Review } from './models/review.model';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class PokeReviewService {
  reviewsarray:any=[];
  pokeid:number=0;
  constructor(private http:HttpClient) { }
  
  getAllReviewByPokemonId(id:number):Observable<HttpResponse<Pokemon>>{
    return this.http.get("http://localhost:3000/reviews/pokemon/" + id + "/", {observe: "response"})as Observable<HttpResponse<Pokemon>>
  }
  sendrev(rating:number,disc:String,id:number,user:any):Observable<Review>{
    let review={rating:rating , review:disc,pokemon_id:id,user:user[0]}
    console.log(review);
    let p: Observable<Review>=this.http.post<any>("http://localhost:3000/reviews/",review) as Observable<Review>;

    return p;
    
    //return this.http.get("http://localhost:3001/allaccount", {observe:"response"}) as Observable<HttpResponse<User>>;
  }
}
