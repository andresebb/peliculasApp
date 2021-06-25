import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieStates, setMovieStates] = useState<MovieState>();

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMovieStates({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });

    // setPeliculasEnCine(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movieStates,
    isLoading,
  };
};
