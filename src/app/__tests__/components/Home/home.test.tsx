import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../components/Home/home';

import { artists } from '../../../__mocks__/artists.mock';

describe('HOME COMPONENT', () => {
    it('should be render home component', () => {
        const component = render(<Home  artists={artists} goToArtist={(data: any) => {}} />);
        expect(component).toBeTruthy();
      });
})

