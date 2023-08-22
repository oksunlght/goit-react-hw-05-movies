import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../utils/fetch-api';
import { ThreeCircles } from 'react-loader-spinner';
import {
  List,
  Author,
  Review,
  Item,
  Marker,
  NoReview,
  Loader,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {!isLoading ? (
        <>
          {reviews.length !== 0 ? (
            <List>
              {reviews.map(({ id, author, content }) => {
                return (
                  <Item key={id}>
                    <Marker>&#8226;</Marker>
                    <Author>Author: {author}</Author>
                    <Review>{content}</Review>
                  </Item>
                );
              })}
            </List>
          ) : (
            <NoReview>We don't have any reviews for this movie.</NoReview>
          )}
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
    </>
  );
};

export default Reviews;
