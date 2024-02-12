import { fetchSearchMovie } from 'api/movieDbApi';
import Form from 'components/Form';
import Loader from 'components/Loader';
import PopularMovies from 'components/PopularMovies';
import Notiflix from 'notiflix';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const ref = useRef(query);

  const searchMovie = useCallback(async queryMovie => {
    try {
      setLoading(true);
      const response = await fetchSearchMovie(queryMovie);
      if (response.total_results === 0) {
        Notiflix.Notify.failure(
          'There is no movies with this request. Please, try again!'
        );
      }
      setSearchFilms(response.results);
      setErrorMessage(false);
    } catch {
      Notiflix.Notify.failure('Something went wrong. Try to reload your page!');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    searchQuery && searchMovie(searchQuery);
  }, [searchMovie, searchQuery]);

  useEffect(() => {
    ref.current && searchMovie(ref.current);
  }, [searchMovie]);

  const handleSetSearchQuery = value => {
    setSearchQuery(value);

    if (query === '') {
      setSearchFilms(null);
      setErrorMessage(true);
    }
  };

  return (
    <main>
      <Form searchMovies={handleSetSearchQuery} />
      {loading && <Loader />}
      {errorMessage && <p>Please enter the movie name!</p>}
      {searchFilms && <PopularMovies films={searchFilms} />}
    </main>
  );
};

export default Movies;
