import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import cart_data from "../data/cart_data.json"
import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'

const Cart = () => {

  /* Calculamos la cantidad total de los productos del Carrito */
  const [total, setTotal] = useState()

  /* Hook para comprobar cada vez que se actualice el carrito para saber si hay nuevos agregados */
  /* Utilizamos la funcion reduce para ir agregando los posibles nuevos precios */
  useEffect(() => {
    const totalCart = cart_data.reduce((accumulator, currentItem)=>(
        accumulator+=currentItem.price*currentItem.quantity
    ),0)
    setTotal(totalCart)
  },[])

  const renderCartItem = ({item}) => (

    <CartItem item={item} /> 

  )
    
  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={ item => item.id }
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
            <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: 'Afacad-Medium'
  },
  confirmButton:{
    backgroundColor: colors.header,
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    fontFamily:'Afacad-Medium',
    fontSize:16,
    color: '#fff'
  }  
})