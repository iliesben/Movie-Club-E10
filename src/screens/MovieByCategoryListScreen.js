import React, { useLayoutEffect, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeLogo } from '../components/HomeLogo'
import { FilmSearch } from '../components/filmSearch'
import { MovieList } from '../components/MovieList'
import { getMoviebyCategory } from '../services/GetApi'

export const MovieByCategoryListScreen = (props) => {

  const { route, navigation } = props;
  const { category, categoryId } = route.params
  const [MovieBycategory, setMovieBycategory] = useState([])


  useLayoutEffect(() => {
    navigation.setOptions({
      title: route && route.params && route.params.category ? `${category}` : 'Catégorie'
    })
  })

  useEffect(() => {
    getMoviebyCategory(categoryId).then(data => setMovieBycategory(data.results))
  }, [])

  return (
    <View>
      <MovieList data={MovieBycategory} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#f4f4f4'
  }
})