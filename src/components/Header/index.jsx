import { Container } from 'Index.styled';
import { HeaderStyled, Link, NavStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavStyled>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </NavStyled>
        <hr />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
