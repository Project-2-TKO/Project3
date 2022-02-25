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
  sum:number=0;
  norev:string;
  percentof5:number=0;
  percentof4:number=0;
  percentof3:number=0;
  percentof2:number=0;
  percentof1:number=0;
  constructor(private rs:PokeReviewService,private ps:PokeDataService) { }

  ngOnInit(): void {
    
    
    
    setTimeout(() => {
      this.rev=this.rs.reviewsarray
      console.log(this.rs.reviewsarray)
      for(var i = 0; i < this.rev.length; ++i){
        if(this.rev[i].rating === 1)
            this.numof1++;
        else if(this.rev[i].rating === 2)
            this.numof2++;   
        else if(this.rev[i].rating === 3)
            this.numof3++;   
        else if(this.rev[i].rating === 4)
            this.numof4++;   
        else if(this.rev[i].rating === 5)
            this.numof5++; 
        else if(this.rev[i].rating === null)
            this.norev="no reviews yet"
      }
      this.sum=this.numof1+this.numof2+this.numof3+this.numof4+this.numof5;
      this.percentof1=this.numof1/this.sum*100;
      this.percentof2=this.numof2/this.sum*100;
      this.percentof3=this.numof3/this.sum*100;
      this.percentof4=this.numof4/this.sum*100;
      this.percentof5=this.numof5/this.sum*100;
      console.log(this.percentof1)
      console.log(this.sum)
    }, 150);
    
    
    
    this.rs.reviewsarray=null;
  }
  

}
