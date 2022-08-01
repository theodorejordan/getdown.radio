import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaylistCarouselComponent } from './playlist-carousel/playlist-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
