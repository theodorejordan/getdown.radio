import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IPlaylist } from './playlist-carousel/playlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    let url = "https://cms.getup.radio/api/v1/playlists?include=genres";

    return this.http.get(url)
  }
}
