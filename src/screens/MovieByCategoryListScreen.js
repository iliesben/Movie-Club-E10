import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View } from 'react-native';
import { LoadIcon } from '../components/Icon/LoadIcon';
import { MovieList } from '../components/list/MovieList'
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

  useEffect(() => { loadFilmsByCategory() }, [])

  return (
    <View>
      <MovieList data={movieBycategory} loadMovies={loadFilmsByCategory} navigation={navigation} totalPages={totalPages} page={page} />
      {isLoading &&
        <LoadIcon bottom={50} />
      }
    </View>
  )
}