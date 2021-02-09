import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { getMovieDetail } from '../services/GetApi'


export const MovieDetailScreen = (props) => {
  const { data } = props

  return (
    <View>
      {/* <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          // source={{ uri: `https://image.tmdb.org/t/p/original${data.backdrop_path}` }}
        />
      </View>
       */}
       <Text>Canan c'est la meilleure</Text>
    </View>
  )
}