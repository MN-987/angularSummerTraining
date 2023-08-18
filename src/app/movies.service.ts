import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovie } from './movie-list/Imovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) {}

  getAllMovies():Observable<Imovie[]>{
    return this.http.get<Imovie[]>(`http://localhost:3000/movies`)
    
  }
}
