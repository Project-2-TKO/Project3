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
  rev:any=[];
  numof5:number=0;
  numof4:number=0;
  numof3:number=0;
  numof2:number=0;
  numof1:number=0;
  constructor(private rs:PokeReviewService,private ps:PokeDataService) { }

  ngOnInit(): void {
    
    
    
    setTimeout(() => {
      this.rev=this.rs.reviewsarray
      console.log(this.rs.reviewsarray)
    }, 150);
    console.log(this.rev)

  }
 

}
