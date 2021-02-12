import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { HomeLogo } from "../components/Icon/HomeIcon";
import { FilmSearch } from '../components/search-page/FilmSearch'
import { searchMovie } from '../services/GetApi'
import { MovieList } from '../components/list/MovieList'
import { COLORS, FONTS, SIZES, SADIMAGE } from "../styles/style";
import { LoadIcon } from "../components/Icon/LoadIcon";

export const SearchScreen = (props) => {

  const { navigation } = props

  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

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
          <MovieList data={movies} loadMovies={() => loadMovies(false)} navigation={navigation} totalPages={totalPages} page={page} />
          {isLoading && <LoadIcon bottom={'50%'} />}
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
  listContiner: {
    flex: 2.4,
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