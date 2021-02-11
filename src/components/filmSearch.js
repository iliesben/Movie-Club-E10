import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet, Text } from "react-native";
import { SearchIcon } from './svg/SearchIcon';
import { COLORS, FONTS, SIZES, BUTTONSEARCH } from "../styles/style";

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
          style={[styles.inputText, FONTS.textInput]}
          placeholder='Titre du film'
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.TouchableOpacityContainerr}>
        <TouchableOpacity style={[styles.TouchableOpacityContainer, BUTTONSEARCH]} disabled={isDisabled} onPress={() => handleClickButton()}>
          <Text style={[styles.submitText, FONTS.buttonText]}> RECHERCHER </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.paddingVertical,
    paddingHorizontal: SIZES.paddingHorizontal,
    borderRadius: SIZES.radius
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom: SIZES.marginBottom
  },
  inputText: {
    paddingLeft: SIZES.paddingLeft,
    height: SIZES.height,
    color: COLORS.primary
  },
  TouchableOpacityContainerr: {
    alignItems: 'flex-end',
  },
  TouchableOpacityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.borderRadius
  },
  submitText: {
    color: COLORS.white
  }
})
