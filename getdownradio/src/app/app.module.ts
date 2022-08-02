import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaylistCarouselComponent } from './playlist-carousel/playlist-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistsService } from './playlists.service';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PlaylistsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
