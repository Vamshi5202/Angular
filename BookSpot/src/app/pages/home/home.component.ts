import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/model/books';
import { BooksService } from 'src/app/service/books.service';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: BooksService) { }

  // g(){
  //   for(let i =0;i<this.api.categoriesList.length;i++)
  //   {
  //     this.getAllBooks(this.api.categoriesList[],3,1)
  //   }
  // }

  ngOnInit(): void {
   
    this.ck();
    console.log(this.books)
   
  }

  allCategories = this.api.categoriesList;

  books: Books[] = [];

  //books2D: Books[] = [];

  ck() {
    this.allCategories.map(x => {
      let xd = this.api.searchBooksByQuery(x, 3, 1)
        .subscribe(data => { data.items.catx = x; this.books.push(data) }, err => err);
    })
  }

  visible = false;

  searchBooks: Books[] = [];
  query = "";
  
  getAllBooksBySearch(query: string, max: number, index: number) {
    this.api.searchBooksByQuery(query, max, index).subscribe((data) => {
      this.searchBooks = data.items;
      console.log(data)
    }, err => console.log(err))


  }
}
