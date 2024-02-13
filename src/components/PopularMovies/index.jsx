import { useLocation } from 'react-router-dom';
import { List, Item, MovieLinkStyled } from './PopularMovies.styled';
import { ImgMovie } from 'page/MovieDetails/MovieDetails.styled';

const PopularMovies = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(({ id, title, poster_path, original_title }) => (
        <Item key={id}>
          <MovieLinkStyled to={`/movies/${id}`} state={{ from: location }}>
            <ImgMovie
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />
            <p>{title}</p>
            
          </MovieLinkStyled>
        </Item>
      ))}
    </List>
  );
};

export default PopularMovies;
