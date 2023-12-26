import { ActivityIndicator, StyleSheet, Image, Text, View, TouchableOpacity, useWindowDimensions, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from '../data/products_data.json'
//import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from 'react-native-snap-carousel';
import { colors } from '../global/colors';

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

  //console.log(productSelected.images.map((value, index) => { return { position: index, valor: value }}));

  //const arrayImages = productSelected.images.map((value) => { return { img: value }});
  //console.log(arrayImages)

  const { width:screenWidth } = Dimensions.get("window")
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 8;

  const renderItem = ({item}) => 
    (
      <View style={styles.itemContainer}>
          <Image 
            source={{uri:item}}
            resizeMode='contain'
            style={styles.itemImg}
          />
      </View>
    )

  return (
    <>
    {
      isLoading
      ?
      <ActivityIndicator />
      :
      <View style={styles.backgroundDetail}>
        {/* <Header title="Detalle del producto"/> */}
        <ScrollView>
          <Carousel
              layout='default'
              data={productSelected.images}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              autoplay={true}
          />
          <Text>{"\n"}</Text>
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
  }
})