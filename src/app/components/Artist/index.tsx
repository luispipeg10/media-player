import React, { useEffect, useState } from 'react';
import { useArtists, IArtist, IAlbums, IAlbum } from '../../core';

import { useParams, useHistory } from "react-router-dom";
import { path } from 'ramda';

import ArtistComponent from './artist';

const ArtistWrapper = () => {
    const { getArtistsById, getAlbumsByArtistId } = useArtists();
    const { id } = useParams();
    const { push } = useHistory();

    const [artist, setArtist] = useState<IArtist>();
    const [loader, setLoader] = useState<boolean>(false);
    const [albums, setAllAlbums] = useState<IAlbums>()


    /**
     * get artists by id, executing when change id param
     */
    useEffect(() => {
        setLoader(true);
        getArtistsById(id).then((resolve: IArtist) => {
            setArtist(resolve);
            setLoader(false);
        })
    }, [id, getArtistsById]);

    /**
     * get albums by artist, executing when change id param
     */
    useEffect(() => {
        getAlbumsByArtistId(id).then((response: any[]) => {
            if (response.length) {
                // eslint-disable-next-line
                const album = response.filter(r => r.artist == id);
                if (album.length) setAllAlbums(album[0]);
            }
        })
    }, [getAlbumsByArtistId, id]);

    /**
     * go to specific album
     * @param album IAlbum
     * @param artistId number
     */
    const goToAlbum = (album: IAlbum, artistId: number) => {
        const albumId = path(['id'], album);
        push(`/artist/${artistId}/album/${albumId}`);
    }

    /**
     * go To back page
     */
    const goToBack = () => {
        push(`/`);
    }

    if (loader) return <div>Cargando...</div>

    if (!artist) return <div>No existe este artista</div>;

    return <ArtistComponent artist={artist} albums={albums} goToAlbum={goToAlbum} goToBack={goToBack}/>
}

export default ArtistWrapper;
