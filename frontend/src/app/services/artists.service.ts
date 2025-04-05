import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  uri = "http://localhost:4000/artists";

  constructor(private http: HttpClient) { }

  getAllArtists(){
    return this.http.get<Artist[]>(`${this.uri}/getAllArtists`);
  }
}
