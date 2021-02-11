import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, ActivityIndicator, View, Text, Image } from "react-native";
import { HomeLogo } from "../components/HomeLogo";
import { FilmSearch } from '../components/FilmSearch'
import { searchMovie } from '../services/GetApi'
import { MovieList } from '../components/MovieList'
import { COLORS, FONTS, SIZES, SADIMAGE } from "../styles/style";

export const SearchScreen = (props) => {

  const { navigation } = props

  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  // useEffect(() => {

  //   return () => {

  //   };
  // }, [])

  console.log('navigation:', navigation)
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: route && route.params && route.params.category ? `${category}` : 'Catégorie'
  //   })
  // })

  const handleSearchText = (text) => setSearchText(text)

  const searchMovies = () => loadMovies(true)

  const loadMovies = (isNewSearch) => {
    setIsLoading(true)

    searchMovie(searchText, isNewSearch ? 1 : page + 1)
      .then(data => {
        setPage(data.page);
        setTotalPages(data.total_pages)
        setMovies(isNewSearch ? data.results : [...movies, ...data.results]);
        setIsLoading(false)
      })
  }

  const renderMovies = () => {
    return (
      (movies.length > 0)
        ?
        <View style={styles.listContiner}>
          <MovieList data={movies} loadMovies={() => loadMovies(false)} totalPages={totalPages} page={page} />
          {isLoading &&
            <View style={{ bottom: 100 }}>
              <ActivityIndicator size='large' color={'#000'} />
            </View>
          }
        </View>
        :
        <View style={styles.NoResultcontainer}>
          <Image style={SADIMAGE} source={require('../../assets/bad.png')} />
          <Text style={[styles.textNoResult, FONTS.h1]}>Aucune recherche effectuée.</Text>
        </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View>

      </View> */}
      <View>
        <HomeLogo />
      </View>
      <View style={styles.filmSearchContainer}>
        <FilmSearch handleSearch={handleSearchText} handleClickButton={() => {
          setMovies([])
          searchMovies()
        }} />
      </View>
      {renderMovies()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor
  },
  filmSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: SIZES.marginTop
  },
  NoResultcontainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNoResult: {
    color: COLORS.secondary
  }
})