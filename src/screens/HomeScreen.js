import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollViewComponent, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoryButton } from '../components/CategoryButton'
import { HomeLogo } from '../components/HomeLogo'
import { getCategory } from '../services/GetApi'

export const HomeScreen = (props) => {

  const { navigation, route } = props
  const [category, setCategory] = useState([])

  useEffect(() => {
    getCategory().then(data => setCategory(data))
  }, [])

  const listNavigate = (_category, _id) => {
    props.navigation.navigate('List', { category: _category, categoryId: _id })
  }

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    flexWrap: 'wrap',
  }
})
