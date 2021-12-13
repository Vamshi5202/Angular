import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  url: string = "https://www.googleapis.com/books/v1";

  api: string = "AIzaSyB68-MIMiCNbG3md1tGvbBz5Ep_K2RH1SQ";

  categoriesList = ['Literary ', 'computers', 'thriller']

  searchQuery = "";

  searchBooksByQuery(query: string, max: number, index: number) {
    return this.http.get<any>(`${this.url}/volumes?q=subject:${query}&maxResults=${max}&startIndex=${index}`);
  }



  bookById(id: any) {
    return this.http.get<any>(`${this.url}/volumes/${id}`)
  }

}
