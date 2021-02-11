import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getMovieDetail } from '../services/GetApi';
import { PlayIcon } from '../components/svg/PlayIcon';



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
    <View style={styles.mainContainer}>
      <View style={styles.movieBackdropContainer}>
        <Image
          style={styles.BackdropImage}
          source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
        />
      </View>
      <View style ={styles.middleContainer}> 
        <View style={styles.moviePosterBackgound}>
          <Image 
            style={styles.moviePosterImage} 
            source={{ uri: `https://image.tmdb.org/t/p/original${movieData.poster_path}` }} 
          />
        </View>
        <View style={styles.movieCaption}>
          <Text style={styles.movieTitle}>{movieData.title}</Text>
          <Text style={styles.movieSubtitle}>{movieData.title}</Text>
          <Text style={styles.movieSubtitle}>{movieData.title}</Text>
        </View>
        <View style={styles.playIcon}>
        </View>
      </View>
      <ScrollView style={styles.synopsisScrollableContainer}>
        <Text style={styles.synopsisTitle}>Synopsis</Text>
        <Text style={styles.synopsisText}>{movieData.overview}</Text>
      </ScrollView>     
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent: 'flex-start',
    backgroundColor : '#f4f4f4',
  },
  movieBackdropContainer: {
    flex : 1,
    height : '45%',
    alignItems: 'center',
  },
  movieBackdropImage : {
    flex : 1,
    width : 400,
    height : 300,
    resizeMode: 'cover',
  },
  middleContainer : {
    zIndex : 100,
    position : 'absolute',
    top : '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
    flex : 1,
    width : '90%',
    height : '20%',
  },
  moviePosterBackgound : {
    backgroundColor : 'white',
    borderRadius : 12,
    width : '22%',
    height : '100%',
    alignItems: 'center',
    justifyContent : 'center',
  },
  moviePosterImage : {
    width : '80%',
    height : '85%',
    resizeMode: 'cover',
  },
  movieCaption : {
    backgroundColor : 'white',
    width : '55%',
    height : '65%',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : 12,
  },
  movieTitle : {
    color : '#b5a90f',
    fontWeight : '500',
    textAlign : 'left',
  },
  movieTitle : {
    color : '#b5a90f',
    fontSize : 14,
    fontWeight : '500',
    textAlign : 'left',
    width : '85%',

  },
  movieSubtitle : {
    color : '#b5a90f',
    fontSize : 10,
    textAlign : 'left',
    width : '85%',

  },
  playIcon : {  
    width : 40,
    height : 40,
    backgroundColor : '#b00020',
    borderRadius : 500,
    borderColor : '#b5a90f',
    borderStyle : 'solid',
    borderWidth : 4,
  },
  synopsisScrollableContainer : {
    flex : 1,
    height : '55%',
    width : '90%',
    color : '#b5a90f',

  },
  movieSynopsis : {
    width : 300,
  },
  synopsisTitle : {
    marginTop : 70,
    fontSize : 18,
    fontWeight : '500',
    color : '#b5a90f',
  },
  synopsisText : 
  {
    color : '#b5a90f',
    marginTop : 40,
  },
})