import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { IPlaylist } from './playlist';
import { PlaylistsService } from '../playlists.service';

@Component({
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  pageTitle: string = 'Playlist Detail';
  playlist?: IPlaylist | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private playlistTracks: PlaylistsService) {  }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.pageTitle += `: + ${id}`;

    this.playlist = history.state.data.obj;

    console.log(this.playlist)

    this.playlistTracks.getTracks(this.playlist?.playlistId).subscribe( (data: any) => {
        console.log((data as any).data.attributes.tracks)
      }
    )
  }

  onBack(): void {
    this.router.navigate(['/playlists']);
  }
}
