import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
//import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'

const ProductsByCategory = ({route, navigation}) => {
  
  /* Definición de variable que alojará mi listado de productos (en base a una categoria seleccionada) */

  const [ProductsByCategory, setProductsByCategory] = useState([]) 
  const [search, setSearch] = useState("")
  
  //const { category } = route.params

  /* Definición del Hook useEffect que servirá para monitorear el cambio de categoria según ocurra */

  const category = useSelector(state=>state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

  useEffect(()=>{

    /* Proceso que alojará un nuevo array filtrado con los productos de la categoria seleccionada que viene por props */
    //const productsFilterByCategory = products_data.filter(product=>product.category===category)

    /* Se aplica un re-filter sobre el array previamente filtrado por categorias y se utiliza esta nueva variable en el useEffect [] */
    const productsFiltered = productsFilteredByCategory.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
    /* Seteo del nuevo array en mi variable definida anteriormente */
    setProductsByCategory(productsFiltered)
  },[category, search]
  )

  /* La funcion proveniente del FlatList, usará en este caso el componente ProductItem */
  
  const renderProductItem = ({item}) => (
    
    <ProductItem product={item} navigation={navigation} />
  )

  /* Definición de función que viajará por prop al componente Search */
  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <View style={styles.container}>
        {/* <Header title="Productos" returnHomeHandlerEvent={returnHomeHandlerEvent} /> */}
        <Search onSearchHandlerEvent={onSearch} />
        <FlatList
          data={ProductsByCategory}
          renderItem={renderProductItem}
          keyExtractor={item=>item.id}
        />
      </View>
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.home,
    marginTop: 15,
    width: '100%',
    height: 700
  }
})