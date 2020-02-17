import React, { useEffect, useState } from 'react';
import { path } from 'ramda';

import { useArtists, IArtist } from '../../core';
import { useHistory } from "react-router-dom";

import Home from './home';

const HomeWrapper = () => {
    const { getAllArtists } = useArtists();
    const { push } = useHistory();
    const [loader, setLoader] = useState<boolean>(false);
    const [artists, setArtists] = useState<IArtist[]>([]);

    /**
     * get all artists
     */
    useEffect(() => {
        setLoader(true);
        getAllArtists().then((resolve: IArtist[]) => {
            setArtists(resolve);
            setLoader(false);
        });
    }, [getAllArtists])

    /**
     * go To especific artist
     * @param artist IArtist
     */
    const goToArtist = (artist: IArtist) => {
        const artistId = path(['id'], artist);
        push(`/artist/${artistId}/`);
    }

    if (loader) return <div>Cargando...</div>

    return <Home artists={artists} goToArtist={goToArtist}/>
}

export default HomeWrapper;
