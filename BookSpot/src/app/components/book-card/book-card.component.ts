import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() oneBook: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  open() {
    this.router.navigateByUrl('/singleBook');
  };
  favourites: any = [];

  public addingFav(x: any) {

    const data = localStorage.getItem('my_favourites');
  this.favourites = data? JSON.parse(data):[];
  this.favourites.push(x);
   
    localStorage.setItem("my_favourites", JSON.stringify(this.favourites)); //store favourites


  }

}
