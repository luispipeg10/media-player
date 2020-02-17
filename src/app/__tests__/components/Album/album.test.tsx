import React from 'react';
import { render } from '@testing-library/react';
import Album from '../../../components/Album/album';

import { artist } from '../../../__mocks__/artists.mock';
import { album } from '../../../__mocks__/album.mock';
import { songs } from '../../../__mocks__/song.mock';


import { IAlbum } from '../../../core';

describe('ALBUM COMPONENT', () => {
    it('should be render album component', () => {
        const component = render(<Album songs={songs} onBack={() => {}} onPlay={() => {}} />);
        expect(component).toBeTruthy();
      });
})

