export interface IArtist {
    id: number;
    name: string;
    image: string;
    genres: string[];
    popularity: string;
    spotify_url: string;
    spotify_id: string;
    created_at: string;
    updated_at: string;
}

/**
 * Routes interfaces
 */
export interface IRoutes {
    path: string;
    component: any;
    exact?: boolean;
    strict?: boolean;
}

export interface IHomeComponent {
    artists: IArtist[];
    goToArtist: (artists: IArtist) => void;
}

export interface IBodyComponent {
    children: any
}

export interface IArtistItemComponent {
    artist: IArtist;
    goToArtist: (artists: IArtist) => void;
}

export interface IArtistComponent {
    artist: IArtist;
    albums?: IAlbums;
    goToAlbum: (album: IAlbum, artistId: number) => void;
    goToBack: () => void;
}

export interface IAlbum {
    id: number;
    name: string;
    image: string;
    spotify_url: string;
    total_tracks: number;
}

export interface IAlbums {
    artist: number;
    albums: IAlbum[]
}

export interface IAlbumsItems {
    albums: IAlbum[];
    goToAlbum: (album: IAlbum, artistId: number) => void;
    artistId: number;
}

export interface ISongItem {
    id: number;
    name: string;
    spotify_url: string;
    preview_url: string;
    duration_ms: string;
    explicit: string;
}

export interface ISongs {
    album: number;
    songs: ISongItem[];
}

export interface ISongsComponent {
    songs: ISongs;
    play?: ISongItem;
    onPlay: (song: ISongItem) => void;
    onBack: () => void;
}



