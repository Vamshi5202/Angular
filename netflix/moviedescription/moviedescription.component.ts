import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-moviedescription',
  templateUrl: './moviedescription.component.html',
  styleUrls: ['./moviedescription.component.scss'],
})
export class MoviedescriptionComponent implements OnInit {
  movieInfo:any;
  constructor(private navparams:NavParams,private modal:ModalController) { }

  ngOnInit() {
    console.log(this.navparams.data.movieData,"data")
    this.movieInfo=this.navparams.data.movieData
  }
  closeModal(){
    this.modal.dismiss({data:{close:true},role:'close',id:'movie-desc'})
  }
}
