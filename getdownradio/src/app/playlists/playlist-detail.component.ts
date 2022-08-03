import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { IPlaylist } from './playlist';
import { PlaylistsService } from '../playlists.service';
import { ITrack } from './track';

@Component({
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  pageTitle: string = 'Playlist Detail';
  playlist?: IPlaylist | undefined;

  tracksRaw: any[] = [];
  tracksClean: ITrack[] =[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private playlistTracks: PlaylistsService) {  }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.pageTitle += `: + ${id}`;

    this.playlist = history.state.data.obj;

    console.log(this.playlist)

    this.playlistTracks.getTracks(this.playlist?.playlistId).subscribe( (data: any) => {
        this.tracksRaw = (data as any).data.attributes.tracks;
      
        console.log(this.tracksRaw)

        this.tracksRaw.forEach( (value) => {
          let newTrack: ITrack = {
            trackId: value.id,
            trackPosition: value.position,
            trackName: value.name,
            trackArtists: value.artists,
            trackLength: (Math.floor(value.length / 60)) + ":" + (value.length % 60 < 10 ? '0' + value.length % 60 : value.length % 60),
            preview: value.preview_url
          }

          this.tracksClean.push(newTrack);
        })

        console.log(this.tracksClean)
      }
    )
  }

  onBack(): void {
    this.router.navigate(['/playlists']);
  }
}
