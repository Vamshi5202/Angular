import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  taxtitle= "Calculate Tax";
  ename:string;
  income:number=0;
  tax:number=0;
  constructor() { }

  ngOnInit() {
  }
  findTax(){
    if(this.income> 1000000)
       this.tax= 500000* 0.1 + (this.income - 1000000)* 0.15;
    else if(this.income > 500000)
       this.tax = (this.income - 500000)* 0.1;
  }
}
