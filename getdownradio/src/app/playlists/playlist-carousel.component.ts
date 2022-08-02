import { Component } from "@angular/core";
import { PlaylistsService } from "../playlists.service";
import { IPlaylist } from "./playlist";

@Component({
    templateUrl: './playlist-carousel.component.html',
    styleUrls:['./playlist-carousel.component.css']
})

export class PlaylistCarouselComponent {
    headerTitle: string = "Latest Playlists";

    playlistsRaw: any[] = [];
    playlistsInter: IPlaylist[] = [];
    cutPlaylists: IPlaylist[][]= [[]];

    constructor(private playlistData: PlaylistsService) { }

    chunk(arr: IPlaylist[], chunkSize: number) {
        let R= [];
        for (let i=0, len=arr.length; i<len; i+=chunkSize) {
            R.push(arr.slice(i, i+chunkSize));
        }
        return R;
    }

    ngOnInit(){
        this.playlistData.getData().subscribe( (data: any) => {
                this.playlistsRaw = (data as any).data;

                console.log(this.playlistsRaw)

                this.playlistsRaw.forEach( (value) => {
                    let newPlaylist: IPlaylist = {
                        playlistId: value.id,
                        coverUrl: value.attributes['cover-url'],
                        playlistTitle: value.attributes.title,
                        playlistDescription: value.attributes.description.replace("</p>", "").substring(3),
                        trackCount: value.attributes['tracks-count']
                    }

                    this.playlistsInter.push(newPlaylist);
                })

                this.cutPlaylists = this.chunk(this.playlistsInter, 3);
                console.log(this.cutPlaylists)
            }
        );
    }
}