import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { PokeReviewService } from 'src/app/poke-review.service';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent implements OnInit {
  pokemon:any=null;
  pokeid:number;
  reviews:any=null;
  constructor(private rs:PokeReviewService,private ps:PokeDataService) { }

  ngOnInit(): void {
    this.pokemon=this.ps.pokemon;
  }
  getreviews(id:number):void{
    console.log(id)
    this.rs.getAllReviewByPokemonId(id).subscribe(
      (data:any) => {
        console.log(data.body)
        this.reviews=data.body;
      },
  
      () => { //incase of errors, set pokemon object to null since we didn't get anything back


      }
    )
    //console.log("review page")
  }

}
