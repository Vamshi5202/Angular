import { Component, OnInit, Input } from '@angular/core';
import { Books } from 'src/app/model/books';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {

  //@Input() booksItem:any;
  constructor(private api: BooksService) { }

  categoriesList = this.api.categoriesList;

  ngOnInit(): void {
    this.ck();
    // console.log(this.booksItem)

  }


  //booksIte:Books[]=[];


  allCategories = this.api.categoriesList;

  booksItem: Books[] = [];

  //books2D: Books[] = [];

  ck() {
    this.allCategories.map(x => {
      let xd = this.api.searchBooksByQuery(x, 3, 1)
        .subscribe(data => { data.items.catx = x; this.booksItem.push(data) }, err => err);
    })
  }

  // getAllBooks(query:string,max:number,index:number){
  //   this.api.searchBooksByQuery(query,max,index).subscribe((data)=>{
  //     this.booksIte=data.items;

  //     console.log(data)
  //   },err=>console.log(err))
  // }
  yourMethod(item: any) {
    //this.getAllBooks("fiction",3,1)

  }
}
