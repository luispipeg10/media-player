import React from 'react';
import './album.css';
import { ISongsComponent } from '../../core';

const AlbumComponent = ({ songs: { songs }, play, onPlay, onBack }: ISongsComponent) => {
        return (<div className="song-component">
                <div className="song-component-header">
                        <div onClick={onBack}><i className="material-icons">
                                                keyboard_backspace
                                                </i> VOLVER</div>
                        CANCIONES
            </div>
                <div className="song-component-body">
                        {songs.length ? (songs.map((song, index) => <div className="song-component-item" key={index}>
                                {song.name}
                                <div onClick={() => onPlay(song)}>
                                        <i className="material-icons" >
                                                play_circle_filled
                                        </i>
                                </div>
                        </div>)) : <div>Cargando...</div>}
                </div>
                {play && <div className={`song-component-song ${play && 'song-open'}`}>
                        <iframe src={play.preview_url} title={play.name}/>
                        <div className="song-component-name">
                                {play.name}
                        </div>
                </div>}
        </div>)
}

export default AlbumComponent;
