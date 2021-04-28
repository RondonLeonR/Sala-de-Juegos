import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }


  public getMoviesImages(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=ce777ef40b977d3a92e65264a1fd9e75')
  }
}
