import { ActivityIndicator, StyleSheet, Image, Text, View, TouchableOpacity, useWindowDimensions, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from '../data/products_data.json'
//import Header from '../components/Header'
import Footer from '../components/Footer'
import { colors } from '../global/colors';
import { useSelector, useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shopSlice'
import Carousel from '../components/Carousel'
import { addItem } from '../features/cartSlice'

const ProductDetail = ({route}) => {

  //const [productSelected, setProductSelected] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()
  
  const productId = route.params
  const productSelected = useSelector(state=>state.shopReducer.productSelected)
  
  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(()=>{
    /*const productFound = products_data.find(product=>product.id===productId)
    setProductSelected(productFound)*/
    setIsLoading(false)
  }
  ,[productId])

  const dispatch = useDispatch()

  const onAddToCart = () =>{
    dispatch(addItem({...productSelected, quantity: 1}))
  }

  return (
    <>
    {
      isLoading
      ?
      <ActivityIndicator />
      :
      <View style={styles.backgroundDetail}>
        <ScrollView>
          <Carousel />
          <Text>{"\n"}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{productSelected.title}</Text>
            <Text style={styles.description}>{productSelected.description}</Text>
            <Text style={styles.price}>$ {productSelected.price}</Text>
            <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
              <Text style={styles.buyText}>Agregar al carrito</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    }     
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  detailContainer: {
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Afacad-Medium',
    fontSize: 32
  },
  description: {
    fontFamily: 'Afacad-Regular',
    fontSize: 20,
    padding: 10
  },
  price: {
    fontFamily: 'Afacad-SemiBold',
    fontSize: 32,
    color: 'black'
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.buyButton,
    borderRadius: 10
  },
  buyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  itemContainer: {
   marginTop: 20,
  },
  itemImg: {
    width: '100%',
    height: 280,
    aspectRatio: 3/2
  },
  backgroundDetail: {
    backgroundColor: colors.home,
    marginTop: 15,
    width: '100%',
    height: 700
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.header,
    borderRadius: 10,
  }
})