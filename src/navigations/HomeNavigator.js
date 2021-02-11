import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen'
import { MovieByCategoryListScreen } from "../screens/MovieByCategoryListScreen";
import { COLORS, FONTS } from '../styles/style';
import { BackIcon } from '../components/svg/BackIcon';

const Stack = createStackNavigator();

export const HomeNavigator = (props) => {
  // navigation
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="List"
        component={MovieByCategoryListScreen}
        options={{
          headerStyle: {
            height: 145,
            borderRadius: 50,
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.secondary,
          headerTitleStyle: FONTS.h1,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => props.navigation.navigate('Accueil')}>
              <BackIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}