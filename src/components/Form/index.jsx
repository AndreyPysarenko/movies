import { Container } from 'Index.styled';
import { SearchForm, Input, Button } from './Form.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { GoBackLink, SpanSvg } from 'page/MovieDetails/MovieDetails.styled';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Form = ({ searchMovies }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleInputChange = ({ target: { value } }) => {
    value ? setSearchParams({ query: value.trim() }) : setSearchParams({});
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: query.trim() });
    searchMovies(query);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          autoFocus
          value={query}
          placeholder="Enter the movie name"
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>

        <GoBackLink to={location.state?.from ?? '/'}>
          <SpanSvg>
            <HiArrowSmallLeft size="22" />
          </SpanSvg>
          Go back
        </GoBackLink>
      </SearchForm>
    </Container>
  );
};

export default Form;
