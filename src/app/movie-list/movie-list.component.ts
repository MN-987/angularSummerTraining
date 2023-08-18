import { Component, OnInit } from '@angular/core';
import { Imovie } from './Imovies';
import { MoviesService } from '../movies.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
allMovies:Imovie[]=[];
allMoviesArr:any;
  constructor(public movieSer:MoviesService) { }
 
  basepath = 'https://image.tmdb.org/t/p/w780';
  ngOnInit(): void {
    this.movieSer.getAllMovies().subscribe({
      next: (productsData) => {
        this.allMovies = productsData;
                console.log(productsData); 
               
                // console.log(this.allMovies[0]);
        // All movies is working but when I console.log() what is inside it it gives me error of undefined
      }
    });
    
  }

}
