import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { CategoryButton } from '../components/CategoryButton'
import { HomeLogo } from '../components/HomeLogo'
import { getCategory } from '../services/GetApi'
import { COLORS } from "../styles/style";

export const HomeScreen = (props) => {

  const { navigation } = props
  const [category, setCategory] = useState([])

  useEffect(() => { getCategory().then(data => setCategory(data)) }, [])

  const listNavigate = (_category, _id) => navigation.navigate('List', { category: _category, categoryId: _id })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <HomeLogo />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.categoryContainer}>
          {
            category && category.genres && category.genres.length > 0 && category.genres.map((category, index) => <CategoryButton key={index} content={category.name} navigation={() => listNavigate(category.name, category.id)} />)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor
  },
  logoContainer: {
    flex: .5,
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    flexWrap: 'wrap'
  }
})
