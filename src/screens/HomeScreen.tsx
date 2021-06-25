import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  StatusBar,
  ActivityIndicator,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {Dimensions} from 'react-native';
import {HorizontalSlider} from '../components/HorizontalSlider';

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

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
    <ScrollView>
      <View style={{marginTop: top + 10}}>
        <StatusBar backgroundColor="red" />

        <View
          style={{
            height: 440,
          }}>
          <Carousel
            data={nowPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            layout={'stack'}
            firstItem={4}
            layoutCardOffset={18}
            inactiveSlideOpacity={0.8}
          />
        </View>

        <HorizontalSlider title="Popular" movies={popular!} />
        <HorizontalSlider title="Top Rated" movies={topRated!} />
        <HorizontalSlider title="Upcoming" movies={upcoming!} />
      </View>
    </ScrollView>
  );
};
