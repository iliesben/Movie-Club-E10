import React from 'react'
import { StyleSheet, Image, View } from 'react-native';

export const HomeLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/logo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 220,
    borderRadius: 100 / 0.5,
    borderWidth: 6,
    backgroundColor: "white",
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  }
})

