import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calctitle:string = 'Calculator';
  amt:number = 0;
  years:number =0;
  rate:number =0;
  res:string;
  constructor() { }

  ngOnInit() {
  }
  calcSimple(){
    this.res = (this.amt * this.years * this.rate/100).toFixed(2);
  }
  calcComp(){
    this.res =(this.amt * Math.pow((1+this.rate/100), this.years)-this.amt).toFixed(2);
  }
}
