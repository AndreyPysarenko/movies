import { fetchGetTrending } from 'api/movieDbApi';
import Loader from 'components/Loader';
import PopularMovies from 'components/PopularMovies';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        setLoading(true);
        const response = await fetchGetTrending();
        setFilms(response.results);
      } catch {
        Notiflix.Notify.failure(
          'Something went wrong. Try to reload your page!'
        );
      } finally {
        setLoading(false);
      }
    };
    getTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <PopularMovies films={films} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
