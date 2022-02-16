import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeReviewService {

  constructor(private http:HttpClient) { }

  getAllReviewById(id:number):Observable<HttpResponse<Pokemon>>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon/reviews/pokemon/" + id + "/", {observe: "response"})as Observable<HttpResponse<Pokemon>>
  }
}
