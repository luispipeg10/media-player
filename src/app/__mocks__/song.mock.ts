import { ISongs, ISongItem } from '../core';

export const song: ISongItem = {
    id: 1,
    name: 'song-mock',
    duration_ms: '100',
    explicit: 'mock',
    preview_url: 'song.mock.com',
    spotify_url: 'song.mock.com'
}

export const songs: ISongs = {
    album: 1,
    songs: [
        song
    ]
}
