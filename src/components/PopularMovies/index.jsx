import { useLocation } from 'react-router-dom';
import { List, Item, MovieLinkStyled } from './PopularMovies.styled';

const PopularMovies = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(({ id, title }) => (
        <Item key={id}>
          <MovieLinkStyled to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLinkStyled>
        </Item>
      ))}
    </List>
  );
};

export default PopularMovies;
