import { Container, Title } from 'Index.styled';
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
    <Container>
      <Title>Trending today</Title>
      <PopularMovies films={films} />
      {loading && <Loader />}
    </Container>
  );
};

export default Home;
