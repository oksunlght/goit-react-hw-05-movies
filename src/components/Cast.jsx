import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast, setImageURL } from '../utils/fetch-api';
import { ThreeCircles } from 'react-loader-spinner';
import { Photo, CastName, CastList, CastItem, Loader } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      {!isLoading ? (
        <CastList>
          {cast.map(({ character, id, original_name, profile_path }) => {
            return (
              <CastItem key={id}>
                <Photo
                  src={profile_path && setImageURL(profile_path)}
                  alt={original_name}
                />
                <div>
                  <CastName>{original_name}</CastName>
                  <CastName>Character: {character} </CastName>
                </div>
              </CastItem>
            );
          })}
        </CastList>
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

export default Cast;
