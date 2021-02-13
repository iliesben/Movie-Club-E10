import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { MovieByCategoryListScreen } from "../screens/MovieByCategoryListScreen";
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { COLORS, FONTS } from '../styles/style';
import { BackIcon } from '../components/Icon/SvgIcon';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={MainTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={MovieDetailScreen} />
      <Stack.Screen
        name="List"
        component={MovieByCategoryListScreen}
        options={(props) => ({
          headerStyle: {
            height: 145,
            borderBottomEndRadius: 50,
            borderBottomStartRadius: 50,
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.secondary,
          headerTitleStyle: FONTS.h1,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => props.navigation.navigate('Accueil')}>
              <BackIcon />
            </TouchableOpacity>
          )
        })}
      />
    </Stack.Navigator>
  );
}