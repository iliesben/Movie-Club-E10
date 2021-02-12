import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FadeAnimation, ScaleAnimation } from '../../animations/Animations';
import { COLORS, FONTS, SIZES, BUTTON, SHADOW } from "../../styles/style";

export const CategoryButton = (props) => {

  const { content, navigation } = props

  return (
    <ScaleAnimation initValue={0} toValue={1} duration={700}>
      <TouchableOpacity onPress={() => { navigation() }} style={[styles.TouchableOpacityContainer, BUTTON, SHADOW]}>
        <Text style={[styles.text, FONTS.h2]}>{content}</Text>
      </TouchableOpacity>
    </ScaleAnimation>
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