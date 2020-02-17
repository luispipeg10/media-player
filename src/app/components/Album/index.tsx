import React, { useEffect, useState } from 'react';
import { useArtists, ISongs, ISongItem } from '../../core';

import { useParams, useHistory } from "react-router-dom";

import Album from './album';

const AlbumWrappper = () => {
    const { getSongsByAlbumId } = useArtists();
    const { id, idAlbum } = useParams();
    const { push } = useHistory();

    const [songs, setSongs] = useState<ISongs>();
    const [play, setPlay] = useState<ISongItem>();

    /**
     * get songs by album id, executing when change id and idAlum params
     */
    useEffect(() => {
        getSongsByAlbumId(idAlbum).then((resolve: any[]) => {
            // eslint-disable-next-line
            const s = resolve.filter(al => al.album == idAlbum);
            if (s.length) setSongs(s[0]);
        })
    }, [id, getSongsByAlbumId, idAlbum])

    /**
     * play song
     */
    const onPlay = (song: ISongItem) => {
        setPlay(song);
    }

    /**
     * go to back play
     */
    const onBack = () => {
        push(`/artist/${id}/`);
    }

    if (!songs) return <div>Cargando</div>

    return <Album songs={songs} onPlay={onPlay} play={play} onBack={onBack}/>
}

export default AlbumWrappper;
