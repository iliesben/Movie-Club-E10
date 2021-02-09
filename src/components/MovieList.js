import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FilmItem } from './FilmItem'

export const MovieList = (props) => {

  const { data, totalPages, page, loadMovies } = props
  return (
    <View>
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        renderItem={({ item }) => <FilmItem data={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (page < totalPages) loadMovies(false)
        }}
      />
    </View>
  )
}
