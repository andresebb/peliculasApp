import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {CreditResponse, Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetail = movieDB.get<MovieFull>(`/${movieId}`);
    const movieCredit = movieDB.get<CreditResponse>(`/${movieId}/credits`);

    const [movieDetailResp, movieCreditResp] = await Promise.all([
      movieDetail,
      movieCredit,
    ]);

    setstate({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: movieCreditResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  });

  return {
    ...state,
  };
};
