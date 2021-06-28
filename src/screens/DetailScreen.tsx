import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetail} from '../hooks/useMovieDetail';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {MovieDetails} from '../components/MovieDetail';
import {useNavigation} from '@react-navigation/native';

const screemHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMovieDetail(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.title}</Text>
        <Text style={styles.title}>{movie.original_title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="red" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast!} />
      )}

      {/*Boton para cerrar*/}
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.pop()}>
        <Icon color="white" name="arrow-back-outline" size={40} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: screemHeight * 0.7,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 7,
    elevation: 9,
    backgroundColor: 'red',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    opacity: 0.8,
    fontSize: 14,
  },
  goBack: {
    position: 'absolute',
    top: 10,
    elevation: 999,
    left: 10,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
  },
});
