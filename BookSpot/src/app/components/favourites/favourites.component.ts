import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/model/books';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  books: any;

  ngOnInit(): void {
    const data = localStorage.getItem('my_favourites' || '{}');
    // console.log(data);
    if (data)
      this.books = JSON.parse(data);
    console.log(typeof this.books)
  }

  clearAll() {
    localStorage.removeItem('my_favourites');
  }

}
