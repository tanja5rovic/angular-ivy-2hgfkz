import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SongService } from './services/song.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SongListComponent } from './song-lists/song-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, SongListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SongService]
})
export class AppModule { }
