import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Image } from "react-native";
import { SearchIcon } from '../components/svg/SearchIcon';

export const FilmSearch = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const onChangeText = (text) => {
    setIsDisabled(text === '')
    props.handleSearch(text);
  }

  return (
    <View style={styles.input_box}>
      <View style={styles.input_container}>
        <SearchIcon fill="#b5a90f" />
        <TextInput
          style={styles.input_text}
          placeholder='Titre du film'
        // onChangeText={onChangeText}
        />
      </View>
      <Button styles={styles.button_container} disabled={isDisabled} title='Rechercher' onPress={() => props.handleClickButton()} />
    </View>
  )
}

const styles = StyleSheet.create({
  input_box: {
    backgroundColor: '#b00020',
    padding: 20,
    borderRadius: 20
  },
  input_container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  input_text: {
    paddingLeft: 20,
    height: 40
  },
  // backgroundColor: '#b5a90f',
  // alignItems: 'flex-end',
  // borderRadius: 10
})
