import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet, Image, Text } from "react-native";
import { SearchIcon } from '../components/svg/SearchIcon';

export const FilmSearch = (props) => {

  const { handleSearch, handleClickButton } = props
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeText = (text) => {
    setIsDisabled(text === '')
    handleSearch(text);
  }

  return (
    <View style={styles.inputBox}>
      <View style={styles.inputContainer}>
        <SearchIcon style={{ marginLeft: 15 }} fill="#b00020" />
        <TextInput
          style={styles.inputText}
          placeholder='Titre du film'
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.TouchableOpacityContainerr}>
        <TouchableOpacity style={styles.TouchableOpacityContainer} disabled={isDisabled} onPress={() => handleClickButton()}>
          <Text style={styles.submitText}> RECHERCHER </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#b00020',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  inputContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputText: {
    paddingLeft: 15,
    height: 50,
    color: '#b00020',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TouchableOpacityContainerr: {
    alignItems: 'flex-end',
  },
  TouchableOpacityContainer: {
    width: 160,
    height: 50,
    backgroundColor: '#b5a90f',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
