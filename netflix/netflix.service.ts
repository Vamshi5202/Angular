import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap ,take, tap} from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  islogin:boolean=false;
  constructor(private http:HttpClient) { }

  getMoviesData(){
  return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=7ecd0b11bc4cd387a22b43cb37086584').pipe(
      switchMap((data)=>{
       
        return of(data)
      }),
      take(1),
      tap(data=>{
        return of(data)
      })
    )
  }

  getPopularMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=7ecd0b11bc4cd387a22b43cb37086584').pipe(
      switchMap((data)=>{
       
        return of(data)
      }),
      take(1),
      tap(data=>{
        return of(data)
      })
    )
  }
  getTrendingall(){
    return this.http.get<any>('https://api.themoviedb.org/3/trending/movie/week?api_key=7ecd0b11bc4cd387a22b43cb37086584').pipe(
      take(1),
      tap(data=>{
        console.log(data,"data1111111")
        return of(data)
      })
    )
  }

  getTvShows(){
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=7ecd0b11bc4cd387a22b43cb37086584').pipe(
      take(1),
      tap(data=>{
        console.log(data,"data1111111")
        return of(data)
      })
    )
  }
  checkAuth(){
  this.islogin=true
  }
}
