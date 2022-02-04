import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalCost: any = 0;

  constructor(private ps: PokeDataService) { }

 ngOnInit(): void{


    this.totalCost = this.ps.totalCost

  }

}
