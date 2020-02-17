import { useCallback, useMemo } from 'react';

import CONFIG from '../../../config';
import { pathOr } from 'ramda';

export const useArtists = () => {

    const API_BASE = pathOr('', ['BASE'], CONFIG);
    const PATH = pathOr('', ['path', 'artist'], CONFIG);

    const URL = API_BASE + PATH;

    /**
     * Get all artists
     */
    const getAllArtists = useCallback(async () => {
        try {
            return fetch(URL).then(resolve => resolve.json());
        } catch (error) {
            return Promise.reject(error);
        }  
    }, [URL]);

    /**
     * Get all artists
     */
    const getArtistsById = useCallback(async (id) => {
        try {
            return fetch(`${URL}/${id}`).then(resolve => resolve.json());
        } catch (error) {
            return Promise.reject(error);
        }  
    }, [URL]);

    /**
     * Get all abums by artist
     */
    const getAlbumsByArtistId = useCallback(async (id) => {
        try {
            return fetch(`${URL}/${id}/albums`).then(resolve => resolve.json());
        } catch (error) {
            return Promise.reject(error);
        }  
    }, [URL]);

     /**
     * Get all abums by artist
     */
     const getSongsByAlbumId = useCallback(async (id) => {
        try {
            return fetch(`${API_BASE}/albums/${id}/songs`).then(resolve => resolve.json());
        } catch (error) {
            return Promise.reject(error);
        }  
    }, [API_BASE]);


    return useMemo(() => {
        return {
        getAllArtists,
        getArtistsById,
        getAlbumsByArtistId,
        getSongsByAlbumId
    }}, [getAllArtists, getArtistsById, getAlbumsByArtistId, getSongsByAlbumId])
}