import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaylistCarouselComponent } from './playlists/playlist-carousel.component';
import { PlaylistDetailComponent } from './playlists/playlist-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCarouselComponent,
    PlaylistDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'playlists', component: PlaylistCarouselComponent},
      { path: 'playlists/:id', component: PlaylistDetailComponent},
      { path: '', redirectTo: 'playlists', pathMatch: 'full'},
      { path: '**', redirectTo: 'playlists', pathMatch: 'full'}
    ])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
