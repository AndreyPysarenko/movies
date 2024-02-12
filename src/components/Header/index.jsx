import { HeaderStyled, Link } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
