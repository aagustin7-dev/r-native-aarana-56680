import { ActivityIndicator, StyleSheet, Image, Text, View, TouchableOpacity, useWindowDimensions, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from '../data/products_data.json'
//import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel';

const ProductDetail = ({route}) => {

  const [productSelected, setProductSelected] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()
  
  const productId = route.params
  
  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(()=>{
    const productFound = products_data.find(product=>product.id===productId)
    setProductSelected(productFound)
    setIsLoading(false)
  }
  ,[productId])

  const { width:screenWidth } = Dimensions.get("window")
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 8;
  
  const renderItem = ({ item }) => {
    <View>
      <Image
        source={{ uri: item }}
        style={styles.imageProduct}
      />
    </View>
  }


  return (
    <>
    {
      isLoading
      ?
      <ActivityIndicator />
      :
      <View>
        {/* <Header title="Detalle del producto"/> */}
        <Text>{"\n"}</Text>
        <ScrollView>
          <Carousel
            layout='default'
            data={productSelected.images}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{productSelected.title}</Text>
            <Text style={styles.description}>{productSelected.description}</Text>
            <Text style={styles.price}>$ {productSelected.price}</Text>
            <TouchableOpacity style={styles.buyButton} onPress={() => null}>
              <Text style={styles.buyText}>Comprar</Text>
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
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 350,
  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Afacad-Medium',
    fontSize: 32
  },
  description: {
    fontFamily: 'Afacad-Regular',
    fontSize: 20
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
    backgroundColor: 'green',
    borderRadius: 10
  },
  buyText: {
    color: '#fff'
  }
})