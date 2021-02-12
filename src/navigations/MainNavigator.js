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
            borderRadius: 50,
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


// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TouchableOpacity } from 'react-native';
// import { HomeScreen } from '../screens/HomeScreen'
// import { SearchScreen } from "../screens/SearchScreen";
// import { MovieByCategoryListScreen } from "../screens/MovieByCategoryListScreen";
// import { MovieDetailScreen } from '../screens/MovieDetailScreen';
// import { COLORS, FONTS } from '../styles/style';
// import { BackIcon } from '../components/svg/BackIcon';

// const Tab = createBottomTabNavigator()

// export const MainNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="AccueilTab" component={HomeNavigator} />
//       <Tab.Screen name="RechercheTab" component={SearchScreen} />
//     </Tab.Navigator>
//   )
// }

// const HomeStack = createStackNavigator();

// const HomeNavigator = (props) => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Accueil" component={HomeScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Details" component={MovieDetailScreen} />
//       <HomeStack.Screen
//         name="Categories"
//         component={MovieByCategoryListScreen}
//         options={{
//           headerStyle: {
//             height: 145,
//             borderRadius: 50,
//             backgroundColor: COLORS.primary,
//           },
//           headerTintColor: COLORS.secondary,
//           headerTitleStyle: FONTS.h1,
//           headerLeft: () => (
//             <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => props.navigation.navigate('Accueil')}>
//               <BackIcon />
//             </TouchableOpacity>
//           ),
//         }}
//       />
//     </HomeStack.Navigator>
//   );
// }

// const SearchStack = createStackNavigator()
// const SearchNavigator = () => {
//   return (
//     <SearchStack.Navigator>
//       <SearchStack.Screen name="Rechercher" component={SearchNavigator} />
//       <SearchStack.Screen name="Détail" component={MovieDetailScreen} />
//     </SearchStack.Navigator>
//   )
// }