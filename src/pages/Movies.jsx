import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesOnSearch } from '../utils/fetch-api';
import { ThreeCircles } from 'react-loader-spinner';
import {
  SearchInput,
  Form,
  Button,
  List,
  StyledLink,
  Item,
  Marker,
  Loader,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    fetchMoviesOnSearch(query)
      .then(({ results }) => {
        setFoundMovies(results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const queryValue = e.currentTarget.elements.query.value;
    const queryString = queryValue !== '' ? { query: queryValue } : {};
    setSearchParams(queryString);
    e.currentTarget.reset();
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <SearchInput type="text" autoComplete="off" name="query" />
        <Button type="submit">Search</Button>
      </Form>
      <>
        {!isLoading ? (
          <List>
            {foundMovies &&
              foundMovies.map(({ id, original_title }) => {
                return (
                  <Item key={id}>
                    <Marker>&#8226;</Marker>
                    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                      {original_title}
                    </StyledLink>
                  </Item>
                );
              })}
          </List>
        ) : (
          <Loader>
            <ThreeCircles
              height="100"
              width="100"
              color="orangered"
              visible={true}
            />
          </Loader>
        )}
      </>
    </>
  );
};

export default Movies;
