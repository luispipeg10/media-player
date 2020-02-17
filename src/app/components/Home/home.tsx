import React from 'react';
import { IHomeComponent, IArtist, IArtistItemComponent } from '../../core';
import './home.css';

const ArtistItemComponent = ({ artist, goToArtist }: IArtistItemComponent) => {
    return artist.name ? <div className="home-artist-item" onClick={() => goToArtist(artist)}>
        <img src={artist.image} alt={artist.name} />
        <div className="home-up-item">
            {artist.name}
        </div>
    </div> : null;
}

const HomeComponent = ({
    artists,
    goToArtist
}: IHomeComponent) => {
    return <div>{
        artists.map((artist: IArtist, index: number) => <ArtistItemComponent key={index} artist={artist} goToArtist={goToArtist} />)
    }</div>
}

export default HomeComponent;
