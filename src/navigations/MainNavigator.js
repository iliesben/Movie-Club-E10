import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from 'react-native';
import { HomeNavigator } from "./HomeNavigator";
import { SearchScreen } from '../screens/SearchScreen';
import { SearchIcon } from '../components/svg/SearchIcon';
import { HomeIcon } from '../components/svg/HomeIcon';
import { COLORS, SIZES } from "../styles/style";


const Tab = createBottomTabNavigator();

export const MainNavigator = () => {

  const isFocude = (focused) => {
    return focused ? COLORS.secondary : COLORS.white;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarVisible: route.name === 'AccueilTab' ? true : false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View style={styles({ focused: focused }).ViewCont}>
              {route.name === 'AccueilTab' ? <HomeIcon fill={isFocude(focused)} /> : <SearchIcon fill={isFocude(focused)} />}
            </View>
          )
        }
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.primary,
        }
      }}
    >
      <Tab.Screen name="AccueilTab" component={HomeNavigator} />
      <Tab.Screen name="Rechercher" component={SearchScreen} />
    </Tab.Navigator >
  )
}

const styles = (props) => StyleSheet.create({
  ViewCont: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: SIZES.borderWidth,
    borderTopColor: props.focused ? COLORS.secondary : COLORS.primary
  }
})