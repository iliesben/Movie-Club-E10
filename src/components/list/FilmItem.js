import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FadeSpringAnimation } from '../../animations/Animations';
import { COLORS, FONTS, SIZES, POSTER, ITEMCONTAINER, SHADOW } from "../../styles/style";
import { LoadIcon } from '../Icon/LoadIcon';

export const FilmItem = (props) => {

  const { movie, navigation, index } = props
  const [loadImageEnd, setLoadImageEnd] = useState([true])

  const navigateDetail = (_id, _title) => {
    navigation.navigate('Details', { movieId: _id, movieTitle: _title })
  }

  const loadImage = (_bottom) => {
    return (
      <LoadIcon bottom={_bottom} />
    )
  }

  return (
    <FadeSpringAnimation initValue={500} toValue={0} speed={2} bounciness={6} index={index}>
      <TouchableOpacity onPress={() => { navigateDetail(movie.id, movie.title) }}>
        <View style={[styles.listItemContainer, SHADOW]}>
          <View>
            {movie.poster_path !== ''
              && <>
                <Image
                  style={POSTER}
                  source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                  onLoadEnd={() => setLoadImageEnd(false)}
                />
                {loadImageEnd && loadImage('40%')}
              </>
            }
          </View>
          <View style={ITEMCONTAINER}>
            <View style={styles.titleItemVoteContainer}>
              {movie.title !== '' && <Text style={[styles.listItemTitle, FONTS.h2]}>{movie.title}</Text>}
              {(movie.release_date !== undefined && movie.release_date !== '' && movie.release_date !== null) && <Text style={styles.listItemInfo}>{movie.release_date.match(/\d{4}/).toString() || movie.release_date}</Text>}
            </View>
            <View style={styles.listItemVoteContainer}>
              {movie.vote_average !== '' && movie.vote_average > 0 && <Text style={[styles.listItemVoteAverage, FONTS.h1]}>{movie.vote_average}</Text>}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </FadeSpringAnimation>
  )
};

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    marginHorizontal: Dimensions.get('window').width * .05,
    marginVertical: SIZES.marginVertical,
    backgroundColor: COLORS.white,
  },
  listItemTitle: {
    color: COLORS.secondary
  },
  listItemInfo: {
    color: COLORS.secondary,
    fontSize: SIZES.smallText
  },
  titleItemVoteContainer: {
    width: Dimensions.get('window').width * .45,
    justifyContent: 'space-around',
    paddingHorizontal: SIZES.paddingHorizontal / 4
  },
  listItemVoteContainer: {
    width: Dimensions.get('window').width * .15,
    justifyContent: 'center',
  },
  listItemVoteAverage: {
    textAlign: 'center',
    color: COLORS.primary
  },
});