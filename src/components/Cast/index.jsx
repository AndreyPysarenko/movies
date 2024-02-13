import { fetchGetMovieCredits } from 'api/movieDbApi';
import Loader from 'components/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerText, Img, TextCast } from './Cast.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
import { TextReviews } from 'components/Reviews/Reviews.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setLoading(true);
        const response = await fetchGetMovieCredits(movieId);

        setCast(response.cast);
      } catch {
        Notiflix.Notify.failure(
          'Something went wrong. Try to reload your page!'
        );
      } finally {
        setLoading(false);
      }
    };
    getMovieCredits();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <Swiper
        className="swiper-box"
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        grid={{
          rows: 10,
          fill: 'row',
        }}
        breakpoints={{
          1440: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
        }}
        modules={[Grid, Pagination]}
      >
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <SwiperSlide className="swiper-slide" key={id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
            />
            <ContainerText>
              <TextCast>{name}</TextCast>
              <p>Character: {character}</p>
            </ContainerText>
          </SwiperSlide>
        ))}

        {cast.length === 0 && (
          <TextReviews>We don't have any cast for this movie!</TextReviews>
        )}
      </Swiper>
    </>
  );
};

export default Cast;
