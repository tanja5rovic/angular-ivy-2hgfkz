import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SongService {
  songs: Song[];

  constructor(private httpClient: HttpClient) {}

  getAllSongs() {
    this.httpClient
      .get('http://127.0.0.1:8000/songs')
      .subscribe((result: any) => {
        this.songs = result.map(
          (song) => new Song(song.title, song.author, song.album, song.year)
        );
      });
  }
}
