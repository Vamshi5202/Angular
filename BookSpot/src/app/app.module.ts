import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { OnCreateDirective } from './directive/on-create.directive';
import { SingleBookComponent } from './components/single-book/single-book.component'
import { FormsModule } from '@angular/forms';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    LeftSideComponent,
    RightSideComponent,
    OnCreateDirective,
    SingleBookComponent,
    SearchBookComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
