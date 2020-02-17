import Artist from '../components/Artist';
import Home from '../components/Home';
import Album from '../components/Album';

import { IRoutes } from '../core';

const routes: IRoutes[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/artist/:id/',
    component: Artist,
    exact: true
  },
  {
    path: '/artist/:id/album/:idAlbum',
    component: Album,
    exact: true
  }
];

export default routes;