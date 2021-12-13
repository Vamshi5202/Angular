import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
   convtitle:string='Number Conversion';
   num:number=0;
   bin:string;
   oct:string;
   hexa:string;
  constructor() { }

  ngOnInit() {
  }
 doConvert(){
   this.bin = this.num.toString(2);
   this.oct = this.num.toString(8);
   this.hexa = this.num.toString(16);
 }
}
