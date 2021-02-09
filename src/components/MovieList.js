import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FilmItem } from './FilmItem'

export const MovieList = (props) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <FilmItem data={item} navigation={props.navigation}/>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}