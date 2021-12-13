import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  voltitle= 'Find Volume';
  height:number =0;
  radius:number =0;
  res:string;
  constructor() { }

  ngOnInit() {
  }

  findCone(){
    this.res=( Math.PI * this.radius * this.radius * this.height).toFixed(2);
  }
  findCyl(){
    this.res = ( Math.PI * this.radius * this.radius * this.height/3).toFixed(2);
  }
}
