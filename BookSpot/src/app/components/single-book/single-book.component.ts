import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/model/books';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: BooksService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      console.log(data);
      this.getBook(data.volumeId)

    })
  }

sale = true;



  book!: any;
  getBook(id: any) {
    this.api.bookById(id).subscribe(res => this.book = res, err => console.log(err))


    if(this.book.volumeInfo.saleInfo.saleability=="NOT_FOR_SALE")
{
      this.sale=false;
}else{
  this.sale=true;
}


  }



  openSite(siteUrl: any) {
    window.open("//" + siteUrl, '_blank');
  }








}
