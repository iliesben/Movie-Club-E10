import React, { useLayoutEffect, useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { getMovieDetail } from '../services/GetApi';
import { BackIcon } from '../components/Icon/SvgIcon';
import { DetailContainer } from '../components/details-page/DetailContainer';
import { LoadIcon } from '../components/Icon/LoadIcon';

export const MovieDetailScreen = (props) => {

  const { route, navigation } = props;
  const { movieId } = route.params
  const [movie, setMovie] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTransparent: true,
      headerStyle: {
        height: 100,
      },
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      )
    })
  })

  useEffect(() => {
    getMovieDetail(movieId).then(data => setMovie(data))
  }, [])

  return (
    Object.keys(movie).length > 0
      ?
      <DetailContainer movie={movie} />
      :
      <LoadIcon bottom={'50%'} />
  )
}