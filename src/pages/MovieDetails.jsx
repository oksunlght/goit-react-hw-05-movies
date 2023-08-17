import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails, setImageURL } from '../utils/fetch-api';
import { ThreeCircles } from 'react-loader-spinner';
import {
  StyledLink,
  MovieContainer,
  Poster,
  MovieTitle,
  Description,
  MovieGenres,
  Item,
  AddInfo,
  AddInfoItem,
  Marker,
  InfoItem,
  InfoList,
  Loader,
} from './MovieDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);

    fetchMovieDetails(movieId)
      .then(
        ({ poster_path, original_title, vote_average, overview, genres }) => {
          setMovieInfo({
            poster_path,
            original_title,
            vote_average,
            overview,
            genres,
          });
          setIsLoading(false);
        }
      )
      .catch(error => console.log(error));
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieInfo;

  return (
    <>
      <StyledLink to={locationRef.current}>&larr; Go back</StyledLink>
      {!isLoading ? (
        <>
          {' '}
          <MovieContainer>
            <Poster
              src={poster_path && setImageURL(poster_path)}
              alt={original_title}
            />
            <div>
              <MovieTitle>{original_title}</MovieTitle>
              <Description>
                User score: {Math.round((vote_average * 100) / 10)} %
              </Description>
              <Description>
                <b>Overview</b>
              </Description>
              <Description>{overview}</Description>
              <Description>
                <b>Genres</b>
              </Description>
              <MovieGenres>
                {genres &&
                  genres.map(({ id, name }) => <Item key={id}>{name}</Item>)}
              </MovieGenres>
            </div>
          </MovieContainer>
          <AddInfo>Additional information</AddInfo>
          <InfoList>
            <InfoItem>
              <Marker>&#8226;</Marker>
              <AddInfoItem to="cast">Cast</AddInfoItem>
            </InfoItem>
            <InfoItem>
              <Marker>&#8226;</Marker>
              <AddInfoItem to="reviews">Reviews</AddInfoItem>
            </InfoItem>
          </InfoList>
        </>
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
      <Suspense
        fallback={
          <Loader>
            <ThreeCircles
              height="100"
              width="100"
              color="orangered"
              visible={true}
            />
          </Loader>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
