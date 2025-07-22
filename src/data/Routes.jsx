// These are routes on my webpage, not external links, e.g., LinkedIn

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ResumePage from '../pages/ResumePage';
import HobbyPage from '../pages/HobbyPage';

const routes = [
  { path: '/', name: 'Home', element: <HomePage />, showInNav: true},
  { path: '/products', name: 'Products', element: <ProductPage />, showInNav: true},
  { path: '/resume', name: 'Resume', element: <ResumePage />, showInNav: false},
  { path: '/hobbies', name: 'Hobbies', element: <HobbyPage />, showInNav: false},
];

export default routes;
