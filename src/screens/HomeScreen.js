import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { CategoryButton } from '../components/home-page/CategoryButton'
import { HomeLogo } from '../components/Icon/HomeIcon'
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
            category && category.genres && category.genres.length > 0 && category.genres.map((_category, _index) => <CategoryButton key={_index} content={_category.name} navigation={() => listNavigate(_category.name, _category.id)} />)
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
    backgroundColor: COLORS.backgroundColor,
    // width: 200000,
    // borderWidth: 6
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
