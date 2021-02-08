import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./HomeNavigator";
import { SearchScreen } from '../screens/SearchScreen';
import { SearchIcon } from '../components/svg/SearchIcon';
import { HomeIcon } from '../components/svg/HomeIcon';


const Tab = createBottomTabNavigator();

export const MainNavigator = () => {

  const isFocude = (focused) => {
    return focused ? '#B5A90F' : '#ffffff';
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'AccueilTab') return <HomeIcon fill={isFocude(focused)} />
          else if (route.name === 'Rechercher') return <SearchIcon fill={isFocude(focused)} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          padding: 5,
          borderTopWidth: 5,
          borderTopColor: '#B5A90F'
        },
        style: {
          backgroundColor: '#B00020',
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="AccueilTab" component={HomeNavigator} />
      <Tab.Screen name="Rechercher" component={SearchScreen} />
    </Tab.Navigator>
  )
}