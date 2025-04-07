import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/Artist';
import { CommonModule } from '@angular/common';
import { ArtistsService } from '../services/artists.service';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor( private artistService: ArtistsService) {}
  

  ngOnInit(): void {
    this.artistService.getAllArtists().subscribe((data) => {
      this.artists = data;
    });
  }
}
