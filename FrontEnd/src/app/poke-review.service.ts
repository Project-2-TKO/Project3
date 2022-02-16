import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeReviewService {

  constructor(private http:HttpClient) { }

  getAllReviewByPokemonId(id:number):Observable<HttpResponse<Pokemon>>{
    return this.http.get("http://localhost:3000/reviews/pokemon/" + id + "/", {observe: "response"})as Observable<HttpResponse<Pokemon>>
  }
}
