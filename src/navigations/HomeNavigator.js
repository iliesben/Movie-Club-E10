import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen'
import { MovieByCategoryListScreen } from "../screens/MovieByCategoryListScreen";
import { MovieDetailScreen } from '../screens/MovieDetailScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={MovieByCategoryListScreen} />
      <Stack.Screen name="Details" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}