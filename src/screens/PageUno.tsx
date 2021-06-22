import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

export const PageUno = ({navigation}: any) => {
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
