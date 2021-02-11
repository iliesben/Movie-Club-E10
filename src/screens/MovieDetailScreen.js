import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { getMovieDetail } from '../services/GetApi'


export const MovieDetailScreen = (props) => {

  const { route, navigation } = props;
  const { movieId, movieTitle } = route.params
  const [movie, setMovie] = useState([])
  // let genre

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route && route.params && route.params.movieTitle ? `${movieTitle}` : 'movieId'
    })
  })

  useEffect(() => {
    getMovieDetail(movieId).then(data => setMovie(data))
    // genre = movie.genres.map(genre => genre.name).join(' ')
  }, [])

  return (
    <View>
      <View style={styles.backdropImageContainer}>
        <Image
          style={styles.BackdropImage}
          source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
        />
      </View>
      <View style={styles.smallInfoContainer}>
        <View style={styles.smallInfoImageContainer}>
          <Image
            style={styles.smallInfoImage}
            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
          />
        </View>
        <View style={styles.smallInfoTextContainer}>
          <Text style={styles.smallInfoTitle}>{movie.title}</Text>
          <Text style={styles.smallInfoText}>Genre</Text> {/* <Text style={styles.smallInfoText}>{genre}</Text> */}
          <Text style={styles.smallInfoText}>{movie.runtime} minutes</Text>
        </View>
        <View style={styles.synopsisContainer}>
          <Text style={styles.synopsisTitle}>Synopsis</Text>
          <Text style={styles.synopsisText}>{movie.overview}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backdropImageContainer: {
    alignItems: "center",
    height: 400,
  },
  BackdropImage: {
    width: "250%",
    height: 1440 / 3.4,
  },
  smallInfoContainer: {
    paddingHorizontal: 10,
    marginTop: -30,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  smallInfoImageContainer: {
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: 'black',
  },
  smallInfoImage: {
    width: 48 * 2.5,
    height: 72 * 2.5,
    resizeMode: 'contain',
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 5,
  },
  smallInfoTextContainer: {
    padding: 10,
    justifyContent: 'space-around',
  },
  smallInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202020'
  },
  smallInfoText: {
    marginTop: 5,
    fontSize: 18,
    color: '#202020',
  },
  synopsisContainer: {
    position: 'relative',
  },
  synopsisTitle: {
    marginBottom: 7,
    fontSize: 18,
    fontWeight: "bold",
    // color: props.isValid ? '#202020' : 'blue',
  },
  synopsisText: {
    fontSize: 16,
    color: '#202020',
    letterSpacing: 0.25,
    lineHeight: 25,
    paddingBottom: 10,
  }
})