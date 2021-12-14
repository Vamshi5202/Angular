import { Component, Injectable, OnDestroy, OnInit  } from '@angular/core';
import {ModalController, Platform, PopoverController} from '@ionic/angular';
import { NetflixService } from './netflix.service';
import {Store} from '@ngrx/store';
import { getMovies, getTopMoviesSucess,getTopMovies ,getTrendingMovies,getTvShows} from '../../redux/actions';
import { Observable } from 'rxjs';
import {MoviedescriptionComponent} from './moviedescription/moviedescription.component';
import { SearchmoviesPipe } from './searchmovies.pipe';
// import {selectFeatureCount} from '../../redux/selectors';
@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.page.html',
  styleUrls: ['./netflix.page.scss'],
  providers:[SearchmoviesPipe]
})
@Injectable({
  providedIn:'root'
})
export class NetflixPage implements OnInit,OnDestroy {
  checkDesktop:boolean=false;
  obtainedSearchall:Array<any>=[];
  obtainedSearchtop:Array<any>=[];
  term:string='';
  allMovies$:Observable<any>;
  topMovies$:Observable<any>;
  loading:boolean=false;
  footer:Array<string>=['Support','Company','Dealers','MyAccount','Back To Top']
  trendingAll$:Observable<any>;
  moviesShow:boolean=false;
  trendingShow:boolean=false;
  tvShows:boolean=false;
  tvshows$:Observable<any>;
  allShow:boolean=false;
  constructor(
    private MoviesService:NetflixService,
    private platform:Platform,
    private popOver:PopoverController,
    private modal:ModalController,
    private store:Store<{movies:any}>,
    private flterPipe:SearchmoviesPipe
    ) { }

  ngOnInit() {
  //    this.MoviesService.getMoviesData().subscribe((data:any)=>{
  //       //  console.log(data.results,)
       
  //    })
  //    this.MoviesService.getPopularMovies().subscribe((data:any)=>{
  //     console.log(data.results,)
  // })
  // console.log(this.term,"term")
  this.store.dispatch(getMovies())
  this.store.dispatch(getTopMovies())
  this.loading=true;
  this.store.select('movies').subscribe((state)=>{
    // console.log(state,"state")
    this.loading=false;
  })

  this.allMovies$=this.store.select(state=>state.movies.allmovies);
  this.topMovies$=this.store.select(state=>state.movies.topmovies);
  
  this.store.dispatch(getTrendingMovies())
  this.trendingAll$=this.store.select(state=>state.movies.trendingAll);
 
  this.store.dispatch(getTvShows())
  this.tvshows$=this.store.select(state=>{
    
   return state.movies.tvshows
  })
  // this.store.select(selectFeatureCount).subscribe(data=>console.log(data,"selectorrrrrrrr")) 
  }
ngOnDestroy(){

}
  ionViewWillEnter(){
    if(this.platform.is('desktop')){
      this.checkDesktop=true
    }

    let notObserableallMovies=[]
    let notObserableTopMovies=[];
    this.allMovies$.subscribe((data)=>notObserableallMovies=[...data])
   this.obtainedSearchall=this.flterPipe.transform(notObserableallMovies,this.term);

   this.topMovies$.subscribe((data)=>notObserableTopMovies=[...data])
   this.obtainedSearchtop=this.flterPipe.transform(notObserableTopMovies,this.term);
  
   
   
  //  console.log(this.obtainedSearchall,this.obtainedSearchtop,"top n all")
    // console.log(this.checkDesktop,"desktopp")
  }
  movieDescription(movie:any){
    this.modal.create({
      component:MoviedescriptionComponent,
      id:'movie-desc',
      componentProps:{movieData:movie}
    }).then(el=>{
      el.present()
      el.onDidDismiss().then(data=>{
        // console.log(data,"data modal")
      })
    })
  }

  handleLogin(){
    console.log("Hiiii")
  }
  handleSearch(){
    let notObserableallMovies=[]
    let notObserableTopMovies=[];
    this.allMovies$.subscribe((data)=>notObserableallMovies=[...data])
   this.obtainedSearchall=this.flterPipe.transform(notObserableallMovies,this.term);

   this.topMovies$.subscribe((data)=>notObserableTopMovies=[...data])
   this.obtainedSearchtop=this.flterPipe.transform(notObserableTopMovies,this.term);

  //  console.log(this.obtainedSearchall,this.obtainedSearchtop,"top n all")
  }

  handleTrending(){
    this.trendingAll$=this.store.select(state=>state.movies.trendingAll)
  }
  handleSegment(event:any){
    event=this.checkDesktop?{detail:{value:event}}:event;
    // console.log(event,this.moviesShow,this.trendingShow,this.tvShows,this.allShow,"Event")
    if(event && event.detail){
      if(event.detail.value==='movies'){
       
        this.moviesShow=true;
        console.log(this.moviesShow,"Allmovie")
        this.trendingShow=false;
        this.tvShows=false;
        this.allShow=false;
      }else if (event.detail.value==='trending'){
        this.trendingShow=true;
        this.moviesShow=false;
        this.allShow=false;
        this.store.dispatch(getTrendingMovies())
        this.trendingAll$=this.store.select(state=>state.movies.trendingAll);
       
      }
      else if(event.detail.value==='tvshows'){
        this.tvShows=true;
        this.moviesShow=false;
        this.trendingShow=false;
        this.allShow=false;
        this.store.dispatch(getTvShows())
        this.tvshows$=this.store.select(state=>{
          
         return state.movies.tvshows
        })
       
      }
      else if(event.detail.value==='all'){
        this.allShow=true;
        this.trendingShow=false;
        this.tvShows=false;
        this.moviesShow=false
        this.store.dispatch(getMovies())
        this.store.dispatch(getTopMovies())
       
        this.store.select('movies').subscribe((state)=>{
          // console.log(state,"state")
          this.loading=false;
        })
      
        this.allMovies$=this.store.select(state=>state.movies.allmovies);
        this.topMovies$=this.store.select(state=>state.movies.topmovies);
        
        this.store.dispatch(getTrendingMovies())
        this.trendingAll$=this.store.select(state=>state.movies.trendingAll);
       
        this.store.dispatch(getTvShows())
        this.tvshows$=this.store.select(state=>{
          
         return state.movies.tvshows
        })
      }
    }
  }
}
