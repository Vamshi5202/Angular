import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private api:BooksService) { }

  ngOnInit(): void {
  }
categoriesList = this.api.categoriesList;

  show=false;
  showHide(){
    this.show=!this.show;
  }
}
