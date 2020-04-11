import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IShows} from '../user/shows'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="https://streamliveapi.herokuapp.com/api/";
  constructor(private http:HttpClient ) {}


  fetchEpisode():Observable<IShows>{
    return this.http.get<IShows>(this.url+'fetchEpisode/');
  }

}
