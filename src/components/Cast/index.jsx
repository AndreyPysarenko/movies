import { fetchGetMovieCredits } from 'api/movieDbApi';
import Loader from 'components/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListCast, TextCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setLoading(true);
        const response = await fetchGetMovieCredits(movieId);

        setCast(response.cast);
      } catch {
        Notiflix.Notify.failure(
          'Something went wrong. Try to reload your page!'
        );
      } finally {
        setLoading(false);
      }
    };
    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ListCast>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
            />
            <TextCast>{name}</TextCast>
            <TextCast>Character: {character}</TextCast>
          </li>
        ))}
      </ListCast>
      {cast.length === 0 && <div>We don't have any cast for this movie</div>}
    </div>
  );
};

export default Cast;
