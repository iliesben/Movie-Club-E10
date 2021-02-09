import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const SearchScreen = () => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <TextInput style={styles.textInput}> </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
  }
})

const styleto = (props) => StyleSheet.create({
  container: {
    marginHorizontal: 220,
  },
  textInput: {
    borderWidth: 1,
    borderColor: props.isValid ? '#000' : '#FF0000'
  }
})