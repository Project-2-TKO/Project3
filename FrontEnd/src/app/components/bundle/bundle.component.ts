import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { BundleList } from 'src/app/pokemon';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {


  public bundle1Ids: any[] = [243, 244, 245];
  public bundle1Img: string = '../../../assets/bundle1.jpg';

  // public price1: number = 300;
  // public bundle1: any[] = [];
  // public bundle2: any[] = [];
  bundle1 = {
    ids: this.bundle1Ids,
    images: this.bundle1Img
  };

  public bundle2Ids: any[] = [280, 281, 282]
  public bundle2Img: string = '../../../assets/bundle2.jpg';
  
  public bundle2 = {
    ids: this.bundle2Ids,
    images: this.bundle2Img
  };
  
  constructor(private ps: PokeDataService) {}

  ngOnInit(): void {
    // console.log(this.bundle1);
    console.log(this.bundle1);
  }

  addBundle(bundle: BundleList){
    console.log(bundle);
    let price: number = 300;
    this.ps.bundleList.push(bundle);
    this.ps.totalCost += price; 
    console.log(this.ps.totalCost)
    // console.log(typeof this.ps.totalCost)
  }

}
