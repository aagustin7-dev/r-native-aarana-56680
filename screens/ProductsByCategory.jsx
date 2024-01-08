import { Button, FlatList, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
//import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
//import Header from '../components/Header'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategory = ({route, navigation}) => {
  
  /* Definición de variable que alojará mi listado de productos (en base a una categoria seleccionada) */

  const [productsByCategory, setProductsByCategory] = useState([]) 
  const [search, setSearch] = useState("")
  
  //const { category } = route.params

  /* Definición del Hook useEffect que servirá para monitorear el cambio de categoria según ocurra */

  const category = useSelector(state=>state.shopReducer.categorySelected)
  //const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

  const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)

  useEffect(()=>{

    if(!isLoading){
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(
      product=>product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
    }

  },[isLoading, category, search])

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
      {
        isLoading
        ?
        <ActivityIndicator />
        :
        <>
            <Search onSearchHandlerEvent ={onSearch} />
            <FlatList
                data={productsByCategory}
                renderItem={renderProductItem}
                keyExtractor={item=>item.id}
            />
        </>
        }
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