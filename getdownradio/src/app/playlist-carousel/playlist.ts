export interface IPlaylist {
    playlistId: string,
    coverUrl: string,
    playlistTitle: string,
    playlistDescription: string,
    trackCount: number
}

// export interface IPlaylist {
//     playlistId: string,
//     playlistType: string,
//     playlistLinks: {
//         self: string
//     }
//     playlistAttributes: {
//         createdAt: Date,
//         updatedAt: Date,
//         coverUrl: string,
//         title: string,
//         description: string,
//         about: string,
//         appleUrl: string,
//         deezerUrl: string,
//         spotifyUrl: string,
//         trackCount: number,
//         length: number,
//         publishedAt: Date,
//         metas: {
//             title: string,
//             description: string,
//             keywords: string[],
//             noindex: boolean,
//             nofollow: boolean,
//             og: {
//                 image: string
//             },
//             twitter: {}
//         }
//     },
//     relationships: {
//         curator: {
//             links: {
//                 self: string,
//                 related: string
//             },
//             data: {
//                 type: string,
//                 id: string
//             }
//         },
//         relatedLinks: {
//             links: {
//                 self: string,
//                 related: string
//             }
//         },
//         genres: {
//             links: {
//                 self: string,
//                 related: string
//             }
//             data: []
//         },
//         categories: {
//             links: {
//                 self: string,
//                 related: string
//             }
//         },
//         tags: {
//             links: {
//                 self: string,
//                 related: string
//             }
//         },
//         recommendations: {
//             links: {
//                 self: string,
//                 related: string
//             }
//         }
//     }
// }