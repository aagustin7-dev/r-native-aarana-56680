import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from '../data/products_data.json'

const ProductDetail = ({productId}) => {

  const [productSelected, setProductSelected] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const productFound = products_data.find(product=>product.id===productId)
    setProductSelected(productFound)
    setIsLoading(false)
  }
  ,[productId])


  return (
    <>
    {
      isLoading
      ?
      <ActivityIndicator />
      :
      <View>
        <Text>{productSelected.title}</Text>
      </View>
    }      
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})