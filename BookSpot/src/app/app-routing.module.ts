import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

const routes: Routes = [
  { path: 'singleBook/:volumeId', component: SingleBookComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: '', component: RightSideComponent },
  { path: 'search/:name', component: SearchBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
