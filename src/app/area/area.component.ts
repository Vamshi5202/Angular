import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  areatitle = "Find Surface Area";
  radius: number = 0;
  res:number;
  constructor() { }

  ngOnInit() {
  }

  findSphere(){
    this.res = 4* Math.PI * this.radius * this.radius;
  }

  findHemiSphere(){
    this.res = 3* Math.PI * this.radius * this.radius;
  }
}
