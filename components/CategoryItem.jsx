// Componente que representará cada nombre de cada categoría

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'
import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shopSlice"

const CategoryItem = ({category, navigation}) => {

  const dispatch = useDispatch()

  return (
    <>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Productos", {category})
        dispatch(setCategorySelected(category))
      }
      }>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
      </TouchableOpacity>
    </>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.card,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 18,
        fontFamily: 'Afacad-Regular'
    }
})