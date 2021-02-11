import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, BUTTON, SHADOW } from "../styles/style";

export const CategoryButton = (props) => {

  const { content, navigation } = props

  return (
    <TouchableOpacity onPress={() => { navigation() }} style={[styles.TouchableOpacityContainer, BUTTON, SHADOW]}>
      <Text style={[styles.text, FONTS.h2]}>{content}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: COLORS.primary,
  },
  TouchableOpacityContainer: {
    justifyContent: 'center',
    margin: SIZES.margin,
    backgroundColor: COLORS.white
  }
})