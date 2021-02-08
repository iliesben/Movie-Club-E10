import React from 'react'
import { StyleSheet, Image, View } from 'react-native';

export const HomeLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/logo.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  }
})