import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../features/shopSlice'
import { colors } from "../global/colors";

const ProductItem = ({product, navigation}) => {
  
    const dispatch = useDispatch()

    return (
    <TouchableOpacity onPress={()=>{
        dispatch(setProductIdSelected(product.id))
        dispatch(setProductSelected(product.id))
        navigation.navigate("Detalle", product.id)
    }
        } style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
            style={styles.productImage}
            resizeMode='cover'
            source={{ uri: product.thumbnail }}
        />
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        backgroundColor: colors.productList,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
        marginTop: 15,
        borderRadius: 2
    },
    productTitle: {
        color: "white",
        fontFamily: 'Afacad-SemiBold',
        fontSize: 18
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 5
    }
})