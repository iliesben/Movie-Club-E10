import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import { PlayIcon } from '../Icon/SvgIcon';
import { COLORS, FONTS, SIZES } from '../../styles/style';
import { ModalView, TrailerButtonIn } from './TrailerModal';
import { LoadIcon } from '../Icon/LoadIcon';


export const DetailContainer = (props) => {

  const { movie } = props


  const [loadImageEnd, setLoadImageEnd] = useState([true])
  const [modalVisible, setModalVisible] = useState(false);

  const regexMinute = /\d{2}/;

  const loadImage = (_bottom) => <LoadIcon bottom={_bottom} />

  return (
    <View style={styles({}).centeredView}>
      <ModalView modalVisible={modalVisible} setModalVisible={setModalVisible} movieId={movie.id} />
      <View style={styles({ modalVisible }).mainContainer}>
        <View>
          {movie.backdrop_path !== ''
            && <>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                style={styles({}).BackdropImage}
                onLoadEnd={() => setLoadImageEnd(false)}
              />
              {loadImageEnd && loadImage('50%')}
            </>
          }
        </View>
        <View style={styles({}).middleContainer}>
          <View style={styles({}).moviePosterBackgound}>
            {movie.poster_path !== ''
              && <>
                <Image
                  style={styles({}).moviePosterImage}
                  source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                  onLoadEnd={() => setLoadImageEnd(false)}
                />
                {loadImageEnd && loadImage('40%')}
              </>
            }
          </View>
          <View style={styles({}).movieCaption}>
            <ScrollView>
              {movie.title !== '' && <Text style={[styles({}).movieTitle, FONTS.h2]}>{movie.title}</Text>}
              {movie.genres && <Text style={[styles({}).movieSubtitle, FONTS.h4]}>{movie.genres.map(_genre => _genre.name).join('/')}</Text>}
              {movie.runtime > 0 && <Text style={[styles({}).movieSubtitle, FONTS.h4]}>{Math.floor(movie.runtime / 60) + 'h' + (regexMinute.test(movie.runtime % 60) ? movie.runtime % 60 : movie.runtime % 60 + '0')}</Text>}
            </ScrollView>
          </View>
          <TouchableHighlight style={styles({}).playIcon} onPress={() => setModalVisible(true)}>
            <PlayIcon style={{ marginLeft: SIZES.marginLeft }} />
          </TouchableHighlight>
        </View>
        <View style={styles({}).detailContainer}>
          <View style={styles({}).synopsisTitleContainer}>
            <Text style={[styles({}).synopsisTitle, FONTS.h1]}>Synopsis</Text>
          </View>
          <ScrollView style={styles({}).synopsisTextContainer}>
            {movie.overview !== '' && <Text style={[styles({}).synopsisText, FONTS.SynopsisText]}>{movie.overview}</Text>}
          </ScrollView>
        </View>
      </View>
      <TrailerButtonIn visible={setModalVisible} />
    </View>
  )
}

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = (props) => StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    opacity: props.modalVisible ? 0.3 : 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor
  },
  BackdropImage: {
    height: windowHeight / 2.5,
    width: windowWidth,
    resizeMode: 'cover'
  },
  middleContainer: {
    bottom: windowHeight / 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: SIZES.paddingHorizontal / 2
  },
  moviePosterBackgound: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    height: 150,
    width: 100
  },
  moviePosterImage: {
    width: 100 / 1.25,
    height: 150 / 1.25,
    resizeMode: 'contain'
  },
  movieCaption: {
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '50%',
    height: 100,
    padding: SIZES.padding,
    borderRadius: SIZES.borderRadiusContainer,
  },
  movieTitle: {
    color: COLORS.secondary
  },
  movieSubtitle: {
    color: COLORS.secondary,
    marginVertical: SIZES.paddingVertical / 4
  },
  playIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: SIZES.borderRadius * 10,
    backgroundColor: COLORS.primary,
    borderWidth: SIZES.borderWidth,
    borderColor: COLORS.secondary
  },
  detailContainer: {
    flex: 1,
    bottom: 40,
  },
  synopsisTitleContainer: {
    marginBottom: SIZES.marginBottom * 1.5,
  },
  synopsisTitle: {
    paddingHorizontal: SIZES.paddingHorizontal / 2,
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.secondary,
  },
  synopsisTextContainer: {
    flex: 1,
    paddingHorizontal: SIZES.paddingHorizontal / 2,
    color: COLORS.secondary
  },
  synopsisText: {
    color: COLORS.secondary,
  }
})