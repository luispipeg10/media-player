import React from 'react';
import { render } from '@testing-library/react';
import Artist from '../../../components/Artist/artist';

import { artist } from '../../../__mocks__/artists.mock';
import { album } from '../../../__mocks__/album.mock';

import { IAlbum } from '../../../core';

describe('ARTIST COMPONENT', () => {
    it('should be render artist component', () => {
        const component = render(<Artist  artist={artist} albums={album} goToAlbum={(album: IAlbum, artistId: number) => {}} goToBack={() => {}}/>);
        expect(component).toBeTruthy();
      });
})

