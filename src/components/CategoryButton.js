import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const CategoryButton = (props) => {

  const { content, navigation } = props

  return (
    <TouchableOpacity onPress={() => { navigation() }} style={styles.TouchableOpacityContainer}>
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#B00020',
    fontWeight: '600',
    fontSize: 16,
  },
  TouchableOpacityContainer: {
    margin: 10,
    width: 150,
    height: 65,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: "#B00020",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2.5,

    elevation: 4,
  }
})