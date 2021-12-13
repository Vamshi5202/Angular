import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
   billtitle:string='Tip Calculate';
   billCost:number =1;
   tipPercent:number=1;
   noOfPeople:number=1;
   tipPerPerson:number;
   totPerPerson:number;
  constructor() { }

  ngOnInit() {
  }

  calcBill(){
    let tipCost = this.tipPercent/100;
    this.tipPerPerson = (this.billCost * tipCost)/this.noOfPeople;
    this.totPerPerson = (this.billCost + tipCost )/this.noOfPeople;
  }

}
