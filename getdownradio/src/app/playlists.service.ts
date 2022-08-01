import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private http:HttpClient) { }

  getData() {
    let url = "https://cms.getup.radio/api/v1/playlists?include=genres";

    return this.http.get(url);
  }
}
