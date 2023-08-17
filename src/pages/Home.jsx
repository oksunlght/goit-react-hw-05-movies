import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesList } from '../utils/fetch-api';
import { ThreeCircles } from 'react-loader-spinner';
import {
  Title,
  Item,
  Marker,
  StyledLink,
  MoviesList,
  Loader,
} from './Home.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    fetchMoviesList()
      .then(data => {
        setMoviesList(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      {!isLoading ? (
        <MoviesList>
          {moviesList.map(({ id, title }) => {
            return (
              <Item key={id}>
                <Marker>&#8226;</Marker>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </StyledLink>
              </Item>
            );
          })}
        </MoviesList>
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
    </div>
  );
};

export default Home;
