import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PageUno} from '../screens/PageUno';
import {DetailScreen} from '../screens/DetailScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="PageUno" component={PageUno} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
