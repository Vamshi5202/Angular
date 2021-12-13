import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/model/books';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  @Input() searchBooks1:any;
  query = "";
  constructor(private api:BooksService,private route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      console.log(data);
      this.query=data.name;
    })
   }

  ngOnInit(): void {
    this.getAllBooksBySearch(this.query,40,1)
  
    
  
  }



  searchBooks: Books[] = [];

  getAllBooksBySearch(query: string, max: number, index: number) {

    this.api.searchBooksByQuery(query, max, index).subscribe((data) => {
      this.searchBooks = data.items;
      console.log(data);
      
    }, err => console.log(err))

    

  }


}
