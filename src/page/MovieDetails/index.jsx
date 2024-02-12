import { fetchGetMovieDetails } from 'api/movieDbApi';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import Loader from 'components/Loader';
import Notiflix from 'notiflix';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Button,
  ContainerMovieInfo,
  GoBackLink,
  LinkInfo,
  ListGenres,
  ListInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetchGetMovieDetails(movieId);
        setMovieInfo(response);
      } catch {
        Notiflix.Notify.failure(
          'Something went wrong. Try to reload your page!'
        );
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movieInfo) return;

  const {
    title,
    release_date,
    overview,
    genres,
    poster_path,
    original_title,
    vote_average,
  } = movieInfo || {};

  return (
    <>
      <GoBackLink to={location.state?.from ?? '/'}>
        <Button type="button">
          <span>
            <HiArrowUturnLeft size="22" />
          </span>
          Go back
        </Button>
      </GoBackLink>
      {loading && <Loader />}

      {movieInfo && (
        <ContainerMovieInfo>
          <img
            width="300px"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {`${Math.ceil(vote_average * 10)}%`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ListGenres>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ListGenres>
          </div>
        </ContainerMovieInfo>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast" state={location.state}>Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews" state={location.state}>Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Suspense>
        <Outlet />
        </Suspense>       
      </div>
    </>
  );
};

export default MovieDetails;
