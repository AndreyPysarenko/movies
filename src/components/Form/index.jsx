import { SearchForm, Input, Button } from './Form.styled';
import { useSearchParams } from 'react-router-dom';

const Form = ({ searchMovies }) => {
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
    </SearchForm>
  );
};

export default Form;
