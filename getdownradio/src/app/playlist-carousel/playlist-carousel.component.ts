import { Component } from "@angular/core";
import { PlaylistsService } from "../playlists.service";

@Component({
    selector: 'pm-playlists',
    templateUrl: './playlist-carousel.component.html'
})

export class PlaylistCarouselComponent {
    headerTitle: string = "Latest Playlist";

    constructor(private playlistData: PlaylistsService){
        this.playlistData.getData().subscribe(data => {
          console.log(data)
        })
    }

    playlists: any[] =[
        {
            "playlist_id": "oasis-vs-blur",
            "type":"playlists",
            "attributes":{
                "cover-url": "https://cms.getup.radio/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59a95815fba94623d914295dc9f02459cb1b8b23/Oasis%20vs%20Blur%206002.png",
                "title":"Oasis vs Blur",
                "description": "Summer 1995. The Battle of Britpop through a lesser-known side of both bands, with oddities, covers and B-sides.\r\n",
                "tracks_count":22
            },
            "relationships": {
                "curator": {
                    "links": {
                        "self": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/relationships/curator",
                        "related": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/curator"
                    },
                }
            }
        },
        {
            "playlist_id": "oasis-vs-blur",
            "type":"playlists",
            "attributes":{
                "cover-url": "https://cms.getup.radio/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59a95815fba94623d914295dc9f02459cb1b8b23/Oasis%20vs%20Blur%206002.png",
                "title":"Oasis vs Blur",
                "description": "Summer 1995. The Battle of Britpop through a lesser-known side of both bands, with oddities, covers and B-sides.\r\n",
                "tracks_count":22
            },
            "relationships": {
                "curator": {
                    "links": {
                        "self": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/relationships/curator",
                        "related": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/curator"
                    },
                }
            }
        },
        {
            "playlist_id": "oasis-vs-blur",
            "type":"playlists",
            "attributes":{
                "cover-url": "https://cms.getup.radio/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59a95815fba94623d914295dc9f02459cb1b8b23/Oasis%20vs%20Blur%206002.png",
                "title":"Oasis vs Blur",
                "description": "Summer 1995. The Battle of Britpop through a lesser-known side of both bands, with oddities, covers and B-sides.\r\n",
                "tracks_count":22
            },
            "relationships": {
                "curator": {
                    "links": {
                        "self": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/relationships/curator",
                        "related": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/curator"
                    },
                }
            }
        },
        {
            "playlist_id": "oaqaaaaar",
            "type":"playlists",
            "attributes":{
                "cover-url": "https://cms.getup.radio/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59a95815fba94623d914295dc9f02459cb1b8b23/Oasis%20vs%20Blur%206002.png",
                "title":"Oasasdasdasdasis vs Blur",
                "description": "Summer 1995. The Battle of Britpop through a lesser-known side of both bands, with oddities, covers and B-sides.\r\n",
                "tracks_count":22
            },
            "relationships": {
                "curator": {
                    "links": {
                        "self": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/relationships/curator",
                        "related": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/curator"
                    },
                }
            }
        },
        {
            "playlist_id": "oaqaaaaar",
            "type":"playlists",
            "attributes":{
                "cover-url": "https://cms.getup.radio/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59a95815fba94623d914295dc9f02459cb1b8b23/Oasis%20vs%20Blur%206002.png",
                "title":"sadasdas vs Blur",
                "description": "Summer 1995. The Battle of Britpop through a lesser-known side of both bands, with oddities, covers and B-sides.\r\n",
                "tracks_count":22
            },
            "relationships": {
                "curator": {
                    "links": {
                        "self": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/relationships/curator",
                        "related": "https://cms.getup.radio/api/v1/playlists/oasis-vs-blur/curator"
                    },
                }
            }
        }
    ];

    cutPlaylists:any= [[]];

    chunk(arr: string | any[], chunkSize: number) {
        let R= [];
        for (let i=0, len=arr.length; i<len; i+=chunkSize) {
            R.push(arr.slice(i, i+chunkSize));
        }
        return R;
    }

    ngOnInit() {
        this.cutPlaylists = this.chunk(this.playlists, 3);

        console.log(this.cutPlaylists);
    }
}