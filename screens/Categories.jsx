import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import Header from '../components/Header'
//import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const Categories = ({navigation}) => {

  const categories = useSelector(state=>state.shopReducer.categories)

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation} />
  )


  return (
    <>
    <View style={styles.homeContainer}>
      {/* <Header title="Categorías" /> */}
      <FlatList style={styles.categories}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item=>item}
      />
    </View>
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.home,
    marginTop: 15,
  },
  categories: {
    marginBottom: 90
  }
})