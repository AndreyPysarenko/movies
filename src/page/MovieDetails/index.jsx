import { fetchGetMovieDetails } from 'api/movieDbApi';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import Loader from 'components/Loader';
import Notiflix from 'notiflix';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  ContainerDescription,
  ContainerMovieInfo,
  GoBackLink,
  ImgMovie,
  ListGenres,
  ListInfo,
  SpanSvg,
  TitleListInfo,
} from './MovieDetails.styled';
import { Container } from 'Index.styled';
import { Link } from 'components/Header/Header.styled';

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
    <Container>
      {loading && <Loader />}

      {movieInfo && (
        <ContainerMovieInfo>
          <ImgMovie
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
          <ContainerDescription>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p>User score: {`${Math.ceil(vote_average * 10)}%`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ListGenres>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ListGenres>
          </ContainerDescription>
          <GoBackLink to={location.state?.from ?? '/'}>
            <SpanSvg>
              <HiArrowSmallLeft size="22" />
            </SpanSvg>
            Go back
          </GoBackLink>
        </ContainerMovieInfo>
      )}
      <hr />
      <div>
        <TitleListInfo>Additional information</TitleListInfo>
        <ListInfo>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ListInfo>
        <hr />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default MovieDetails;
