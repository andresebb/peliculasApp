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
    <ScrollView>
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
            layout={'default'}
            layoutCardOffset={18}
          />
        </View>

        <View style={{height: 260, backgroundColor: 'red'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>
            Populares
          </Text>

          <FlatList
            data={peliculasEnCine}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{height: 250, backgroundColor: 'red'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>
            Populares
          </Text>

          <FlatList
            data={peliculasEnCine}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
