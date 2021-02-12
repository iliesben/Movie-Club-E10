import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, BUTTONTRAILER } from '../../styles/style';
import { Modal, TouchableHighlight, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { LoadIcon } from '../Icon/LoadIcon';
import { getMovieTrailer } from '../../services/GetApi';


export const TrailerButtonIn = (props) => {
  const { visible } = props

  return (
    <TouchableHighlight
      style={BUTTONTRAILER}
      onPress={() => visible(true)}
    >
      <Text style={[{ color: COLORS.secondary }, FONTS.h2]}>Trailler</Text>
    </TouchableHighlight>
  )
}

export const TrailerButtonOut = (props) => {
  const { visible, modalVisible } = props

  return (
    <TouchableOpacity
      style={styles.ToucheableFullScrenn}
      onPress={(e) => visible(!modalVisible)}
    />
  )
}


export const ModalView = (props) => {

  const { modalVisible, setModalVisible, movieId } = props
  const [loadImageEnd, setLoadImageEnd] = useState([true])
  const [movieVideo, setMovieVideo] = useState([])

  useEffect(() => {
    getMovieTrailer(movieId).then(data => { setMovieVideo(data.results) })
  }, [])

  const loadImage = (_bottom) => <LoadIcon bottom={_bottom} />



  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>

      <View style={styles.modalView}>
        {movieVideo.length > 0 ?
          <>
            <TrailerButtonOut visible={setModalVisible} modalVisible={modalVisible} />
            <View style={styles.VideoContainer}>
              <WebView
                style={styles.webViewContainer}
                javaScriptEnabled={true}
                source={{
                  uri: `https://www.youtube.com/embed/${movieVideo[0].key}?=0&autoplay=0&showinfo=0&controls=0`,
                }}
                onLoadEnd={e => setLoadImageEnd(false)}
              />
              {loadImageEnd && loadImage('40%')}
            </View>
          </>
          :
          <TouchableOpacity style={styles.TextContainer} onPress={(e) => setModalVisible(!modalVisible)}>
            <Text style={FONTS.h3}>Ce film ne contient pas de trailer</Text>
          </TouchableOpacity>
        }
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  VideoContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  webViewContainer: {
    width: 320,
    height: 200,
  },
  TextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ToucheableFullScrenn: {
    flex: 1,
    justifyContent: 'center',
  }
})
