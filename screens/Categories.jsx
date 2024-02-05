import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'
import { useGetCategoriesQuery } from '../services/shopService'

const Categories = ({navigation}) => {

  const {data, isLoading, error} = useGetCategoriesQuery()

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation} />
  )


  return (
    <>
    <View style={styles.homeContainer}>
      <FlatList style={styles.categories}
        data={data}
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
    flex: 1,

  },
  categories: {
    marginBottom: 90
  }
})