import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import CinemaSearch from './Components/CinemaSearch/CinemaSearch.jsx';
import FavoriteMovies from './Components/FavoriteMovies.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CinemaSearch />
      }, 
      
      {
        path: '/favoritemovies',
        element: <FavoriteMovies />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
