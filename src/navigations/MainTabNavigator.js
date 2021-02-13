import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from 'react-native';
import { SearchScreen } from '../screens/SearchScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { HomeIcon, SearchIcon } from '../components/Icon/SvgIcon';
import { COLORS, SIZES } from "../styles/style";


const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {

  const isFocude = (_focused) => {
    return _focused ? COLORS.secondary : COLORS.white;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
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
      <Tab.Screen name="AccueilTab" component={HomeScreen} />
      <Tab.Screen name="RechercherTab" component={SearchScreen} />
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
