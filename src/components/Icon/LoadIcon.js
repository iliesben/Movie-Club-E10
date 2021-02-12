import React, { useState } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/style';

export const LoadIcon = (props) => {
  const { bottom } = props
  return (
    <View style={{ width: '100%', position: 'absolute', bottom: bottom }}>
      <ActivityIndicator size='large' color={COLORS.black} />
    </View>
  )
}