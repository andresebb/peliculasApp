import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, StatusBar, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {Dimensions} from 'react-native';

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();

  const {width: windowWidth} = Dimensions.get('window');

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 10}}>
      <StatusBar backgroundColor="red" />

      <View
        style={{
          height: 440,
        }}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
