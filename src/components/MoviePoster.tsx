import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ({movie, width = 300, height = 420}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View
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
    </View>
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
      width: 5,
      height: 4,
    },
    shadowOpacity: 29,
    shadowRadius: 5.46,

    elevation: 24,
  },
});
