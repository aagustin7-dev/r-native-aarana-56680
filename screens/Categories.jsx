import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'

const Categories = ({onSelectedCategoryEvent}) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} onSelectedCategoryEvent={onSelectedCategoryEvent} />
  )


  return (
    <>
    <View style={styles.homeContainer}>
      <Header title="Categorías" />
      <FlatList
        data={categories_data}
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
    backgroundColor: colors.home
  }
})