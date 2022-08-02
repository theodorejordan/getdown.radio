import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  pageTitle: string = 'Playlist Detail';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.pageTitle += `: + ${id}`;
  }

}
