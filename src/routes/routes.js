import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const routes = [
  {
    to: '/',
    path: '/',
    Component: HomePage,
    name: 'Home',
    showInNavbar: true
  },

  {
    to: '*',
    path: '*',
    Component: NotFoundPage,
    name: 'PageNoFound',
    showInNavbar: false
  }
];
