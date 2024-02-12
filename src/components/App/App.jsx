import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout';
import { lazy } from 'react';

const Home = lazy(() => import('page/HomePage'));
const Movies = lazy(() => import('page/MoviesPage'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
