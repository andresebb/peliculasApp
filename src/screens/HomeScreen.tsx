import React, {useEffect} from 'react';
import {View, Text, Button, StatusBar, ActivityIndicator} from 'react-native';
import movieDB from '../api/movieDB';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }
  return (
    <View>
      <StatusBar backgroundColor="red" />
      <MoviePoster movie={peliculasEnCine[1]} />
    </View>
  );
};
