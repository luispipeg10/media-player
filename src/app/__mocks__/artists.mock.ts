import { IArtist } from '../core';

export const artist: IArtist = {
    id: 1,
    name: "Artista mock",
    image: "image-mock.jpg",
    created_at: "date",
    updated_at: "date",
    genres: ["Genres_mock", "Genres_mock2"],
    popularity: "1",
    spotify_id: "1",
    spotify_url: "spotify.mock.com"
}

export const artists: IArtist[] = [
    artist
]