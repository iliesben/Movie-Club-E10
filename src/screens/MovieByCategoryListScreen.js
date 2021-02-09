import React, { useLayoutEffect, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { HomeLogo } from '../components/HomeLogo'
import { FilmSearch } from '../components/filmSearch'
import { MovieList } from '../components/MovieList'
import { getMoviebyCategory } from '../services/GetApi'

export const MovieByCategoryListScreen = (props) => {

  const { route, navigation } = props;
  const { category, categoryId } = route.params

  const [movieBycategory, setMovieBycategory] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(0)

  const loadFilmsByCategory = () => {
    setIsLoading(true)
    getMoviebyCategory(categoryId, (page + 1))
      .then(data => {
        setPage(data.page);
        setTotalPages(data.total_pages);
        setMovieBycategory([...movieBycategory, ...data.results])
        setIsLoading(false)
      })
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      title: route && route.params && route.params.category ? `${category}` : 'Catégorie'
    })
  })

  useEffect(() => loadFilmsByCategory(), [])

  return (
    <View>
      <MovieList data={movieBycategory} loadMovies={loadFilmsByCategory} totalPages={totalPages} page={page} />
      {isLoading &&
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' color={'#000'} />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#f4f4f4'
  },
  loading_container: {
    bottom: 100
  }
})