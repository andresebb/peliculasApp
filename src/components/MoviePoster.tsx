import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ({movie, width = 300, height = 420}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigator = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigator.navigate('DetailScreen', movie)}
      activeOpacity={0.7}
      style={{
        width,
        height,
        backgroundColor: '#dd',
        borderRadius: 18,
        marginHorizontal: 4,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 7,

    elevation: 9,
  },
});
