import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, POSTER, ITEMCONTAINER, SHADOW } from "../styles/style";

export const FilmItem = (props) => {

  const { data, navigation } = props
  const year = year !== null ? data.release_date.match(/\d{4}/) : ''
  
  const navigateDetail = (id, title) => {
    navigation.navigate('Details', { movieId : id, movieTitle : title })
  }

  return (
    <TouchableOpacity onPress={() => {
        navigateDetail(data.id, data.title)
      }}
      style={[styles.listItemContainer, SHADOW]}>
      <View>
        <Image style={POSTER} source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }} />
      </View>
      <View style={ITEMCONTAINER}>
        <Text style={[styles.listItemTitle, FONTS.h2]}>{data.title}</Text>
        <Text style={styles.listItemInfo}>{year.toString() || data.release_date}</Text>
      </View>
      <View style={styles.listItemVoteContainer}>
        <Text style={[styles.listItemVoteAverage, FONTS.h1]}>{data.vote_average}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginHorizontal: 20,
    // marginVertical: 5,
    marginHorizontal: SIZES.marginHorizontal,
    marginVertical: SIZES.marginVertical,
    backgroundColor: COLORS.white
  },
  listItemTitle: {
    color: COLORS.secondary
  },
  listItemInfo: {
    color: COLORS.secondary,
    fontSize: SIZES.smallText
  },
  listItemVoteContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: SIZES.marginRight
  },
  listItemVoteAverage: {
    color: COLORS.primary
  },
});