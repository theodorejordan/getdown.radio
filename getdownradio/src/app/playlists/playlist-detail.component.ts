import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { IPlaylist } from './playlist';

@Component({
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  pageTitle: string = 'Playlist Detail';
  playlist?: IPlaylist | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.pageTitle += `: + ${id}`;

    // this.activatedRoute.data.subscribe( data => {
    //   console.log(data)
    // })

    this.playlist = history.state.data.obj;

    console.log(this.playlist)
  }

  onBack(): void {
    this.router.navigate(['/playlists']);
  }
}
