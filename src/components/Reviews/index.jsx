import { fetchGetMovieReviews } from 'api/movieDbApi';
import Loader from 'components/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, TextReviews, TitleReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setLoading(true);
        const response = await fetchGetMovieReviews(movieId);
        setReviews(response.results);
      } catch {
        Notiflix.Notify.failure(
          'Something went wrong. Try to reload your page!'
        );
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <List>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <TitleReviews>Author: {author}</TitleReviews>
                <p>{content}</p>
              </li>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && (
        <TextReviews>We don't have any reviews for this movie</TextReviews>
      )}
    </>
  );
};

export default Reviews;
