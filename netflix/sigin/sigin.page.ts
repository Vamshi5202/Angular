import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NetflixService } from '../netflix.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.page.html',
  styleUrls: ['./sigin.page.scss'],
})
export class SiginPage implements OnInit {
 signupInfo:FormGroup;
//  @ViewChild('password',{static:true}) passwordValid:ElementRef<any>
  constructor(private authServiceCheck:NetflixService) { }

  ngOnInit() {
    this.signupInfo=new FormGroup({
      email:new FormControl(null,{validators:[Validators.required],updateOn:'blur'}),
      password:new FormControl(null,{validators:[Validators.required,Validators.minLength(8)],updateOn:'blur'})
    })
  }
  handleSubmit(){
    console.log(this.signupInfo.valid,"infooooooooo")
  }
}
