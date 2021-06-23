import React, {useEffect} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = ({navigation}: any) => {
  useEffect(() => {
    movieDB.get('/now_playing').then(res => console.log(res));
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="red" />
      <Text>Pagina 1 </Text>

      <Button
        title="Ir a la otra Pagina"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
