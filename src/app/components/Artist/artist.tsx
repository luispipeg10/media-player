import React from 'react';
import './artist.css';
import { IArtistComponent, IAlbumsItems } from '../../core';

const AlbumsItem = ({ albums, goToAlbum, artistId }: IAlbumsItems) => {
    return <>{albums.map((album, index) => (
    <div className="artist-body-item-container" onClick={() =>  goToAlbum(album, artistId)} key={index}>
        <div className="album-body-image"><img src={album.image} alt={album.name}/></div>
        <div className="artist-body-item" key={index}>
            <div className="artist-body-item-description">
                <span className="album-name">{album.name}</span>
                <span className="album-tracks">Canciones: {album.total_tracks}</span>
            </div>
            <i className="material-icons">
                play_arrow
            </i>
        </div>
    </div>
    ))}</>
}

const ArtistComponent = ({ artist, albums, goToAlbum, goToBack }: IArtistComponent) => {
    const { image, name, popularity, id } = artist;
    return (<>
        <div className="artist-header">
            <div className="artist-back" onClick={goToBack}><i className="material-icons">
                                                keyboard_backspace
                                                </i> VOLVER A ARTISTAS</div>
            <div className="artist-content-image">
                <img src={image} alt={name} />
            </div>
            <div className="artist-content-name">{name}
                <span>
                    <i className="material-icons">
                        sentiment_satisfied
                    </i>
                    {popularity}
                </span></div>
        </div>
        <div className="artist-body">
            {!albums ? (<div>Sin Albumes</div>) : (
                <>
                    <div className="artist-body-title">Álbumes</div>
                    <AlbumsItem albums={albums.albums} goToAlbum={goToAlbum} artistId={id}/>
                </>
            )
            }
        </div>
    </>)
}

export default ArtistComponent;
