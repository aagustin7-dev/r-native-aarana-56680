import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const Cart = ({navigation}) => {

  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const localId = useSelector(state=>state.authReducer.localId)
  const [triggerPost, result] =  usePostOrderMutation()

  const confirmCart = ()=>{
    const createdAt = Date.now()
    triggerPost({total,cartItems,localId:localId, createdAt: createdAt, orderId: Math.ceil(Math.random(1,10)*1000)})
  }

  const renderCartItem = ({item}) => (

    <CartItem item={item} /> 

  )
    
  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={ item => item.id }
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
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
    backgroundColor: colors.cart,
  },
  cartConfirm: {
    marginBottom: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 45,
    marginTop: 20
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: 'Afacad-Medium'
  },
  confirmButton:{
    backgroundColor: colors.confirmButton,
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    fontFamily:'Afacad-Medium',
    fontSize:16,
    color: '#fff'
  }  
})