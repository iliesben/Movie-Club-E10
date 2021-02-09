import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { getMovieDetail } from '../services/GetApi'


export const MovieDetailScreen = (props) => {

  const { route, navigation } = props;
  const { movieData } = route.params
  console.log('data:', movieData)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route && route.params && route.params.movieData.title ? `${movieData.title}` : 'movieId'
    })
  })

  return (
    <View style={{flex:1, backgroundColor:'red'}}>
      <View style={{flex:1, backgroundColor:'blue'}}>
        <Image
          style={styles.movieBackdropImage}
          source={{ uri: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}` }}
        />
      </View>
      <View>
        <View>
          <Image 
            style={styles.movieBackdropImage} 
            source={{ uri: `https://image.tmdb.org/t/p/original${movieData.poster_path}` }} 
          />
        </View>
        <View>
          <Text>{movieData.title}</Text>
          <Text>{movieData.title}</Text>
          <Text>{movieData.title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  movieBackdropImage : {
    width : 200,
    height : 200,
  }
})