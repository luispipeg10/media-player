import React, { useState, useEffect } from 'react';
import './button-play.css';
import { useArtists } from '../../../core';
import { pathOr } from 'ramda';

const ButtonPlay = () => {

    const { getAllArtists, getAlbumsByArtistId, getSongsByAlbumId } = useArtists();
    const [artistId, setArtistId] = useState();
    const [albumId, setAulbumId] = useState();
    
    useEffect(() => {
        if (!artistId) return;

        getAlbumsByArtistId(artistId).then(resolve => {
            if (resolve.length) {
                console.log('resolve', resolve[Math.floor(Math.random() * resolve.length)])
                let album = resolve[Math.floor(Math.random() * resolve.length)].albums;
                setAulbumId(album[Math.floor(Math.random() * album.length)].id);
            }
        })
    }, [artistId, getAlbumsByArtistId])

    useEffect(() => {
        if (!albumId) return;

        getSongsByAlbumId(albumId).then(resolve => {
            if (resolve.length) {
                let song = resolve[Math.floor(Math.random() * resolve.length)].songs;
                console.log(song[Math.floor(Math.random() * song.length)]);
                const url = pathOr('',['preview_url'] ,song[Math.floor(Math.random() * song.length)]);
                window.open(url, '_blank');
            }
        })
    }, [albumId, getSongsByAlbumId])

    const onRamdomPlay = () => {
        getAllArtists().then(resolve => {
            if (resolve.length) {
                setArtistId(resolve[Math.floor(Math.random() * resolve.length)].id);
            }
        })
    }

    return (<div className="button-play" onClick={onRamdomPlay}>
        <i className="material-icons">
            play_arrow
        </i>
    </div>)
}

export default ButtonPlay;
