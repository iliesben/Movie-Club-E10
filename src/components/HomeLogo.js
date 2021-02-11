import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import { LOGO, COLORS, SIZES } from "../styles/style";

export const HomeLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={LOGO}
        source={require('../../assets/logo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: LOGO.width * 1.2,
    height: LOGO.width * 1.2,
    borderRadius: SIZES.radius * 10,
    borderWidth: SIZES.borderWidth,
    borderColor: COLORS.primary,
  }
})

