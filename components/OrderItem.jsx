import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors'

const OrderItem = ({ order, setOrderId, setModalVisible }) => {

    let date = new Date(order.createdAt)
    date = date.toLocaleString()

    return (
        <>
            <Card style={styles.orderItemContainer}>
                <View >
                    <Text style={styles.createdAt}>
                        Creada el {date}
                    </Text>
                    <Text style={styles.total}>Total: ${order.total}</Text>
                </View>
                <TouchableOpacity style={styles.searchIcon} onPress={()=>{
                    setOrderId(order.orderId)
                    setModalVisible(true)
                    }}
                >
                    <Feather name="search" size={24} color="white" />
                </TouchableOpacity>
            </Card>
        </>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    orderItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        margin: 10,
        backgroundColor: colors.orders
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt:{
        fontFamily: 'Afacad-Regular',
        marginBottom:5,
        color: "white"
    },
    total:{
        fontFamily: 'Afacad-SemiBold',
        fontSize:14,
        color: "white"
    }
})