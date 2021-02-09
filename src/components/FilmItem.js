import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FilmItem = (props) => {

  const { data, navigation } = props
  const year = data.release_date.match(/\d{4}/)

  const navigateDetail = (data) => {
    navigation.navigate('Details', { movieData: data })
  }

  return (
    <TouchableOpacity onPress={() => {
      navigateDetail(data)
      console.log('clicked');
    }}>
      <View style={styles.listontainer}>
        <View>
          <Image style={styles.listItemMovieImage} source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }} />
        </View>
        <View style={styles.listItemTextContainer}>
          <Text style={styles.listItemTitle}>{data.title}</Text>
          <Text style={styles.listItemInfo}>{year.toString() || data.release_date}</Text>
          {/* <Text style={styles.listItemInfo}>{movie_director}</Text> */}
        </View>
        <View>
          <Text style={styles.listItemVoteAverage}>{data.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listontainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'orange',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.90,
    shadowRadius: 2.5,
  },
  listItemMovieImage: {
    resizeMode: 'contain',
    width: 100,
    height: 150,
    margin: 5,
  },
  listItemTextContainer: {
    width: 225,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#B5A90F'
  },
  listItemInfo: {
    fontSize: 16,
    color: '#B5A90F'
  },
  listItemVoteAverage: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});