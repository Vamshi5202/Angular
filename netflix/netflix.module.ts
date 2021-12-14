import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetflixPageRoutingModule } from './netflix-routing.module';

import { NetflixPage } from './netflix.page';

import { MoviedescriptionComponent } from './moviedescription/moviedescription.component';
import { SearchmoviesPipe } from './searchmovies.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetflixPageRoutingModule,
  ],
  declarations: [
    NetflixPage,
    MoviedescriptionComponent,
    SearchmoviesPipe
  ],
  // exports:[SearchmoviesPipe],
  // providers:[SearchmoviesPipe]
  
})
export class NetflixPageModule {}
