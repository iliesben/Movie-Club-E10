import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { HomeLogo } from "../components/HomeLogo";
import { FilmSearch } from '../components/filmSearch'
import { searchMovie } from '../services/GetApi'
import { MovieList } from '../components/MovieList'

export const SearchScreen = () => {

  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const handleSearchText = (text) => {
    setSearchText(text)
  }

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
    if (movies.length > 0) {
      return <View style={styles.listContiner}>
        <MovieList data={movies} loadMovies={() => loadMovies(false)} totalPages={totalPages} page={page} />
        {isLoading &&
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' color={'#000'} />
          </View>
        }
      </View>
    }

    return <View style={styles.no_found_container}><Text style={styles.text_no_result}>Aucun film n'a été chargé.</Text></View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <HomeLogo />
      </View>
      <View style={styles.filmSearchContainer}>
        <FilmSearch handleSearch={handleSearchText} handleClickButton={() => searchMovies()} />
      </View>
      {renderMovies()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    flex: .5,
    justifyContent: 'center',
  },
  filmSearchContainer: {
    flex: .4,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  listContiner: {
    flex: 1
  },
  loading_container: {
    bottom: 100
  }
})

// const stylet = (props) => StyleSheet.create({
//   container: {
//     marginHorizontal: 220,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: props.isValid ? '#000' : '#FF0000'
//   }
// })