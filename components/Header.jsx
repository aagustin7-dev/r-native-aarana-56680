import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';

const Header = ({ title, navigation }) => {

  const email = useSelector(state=>state.authReducer.user)
  const localId = useSelector(state=>state.authReducer.localId)
  const dispatch = useDispatch()
  const onLogout = ()=>{
      dispatch(logout())
      deleteSession(localId)
  }

  return (
    <View style={styles.headerContainer}>
      {
        navigation.canGoBack()
        ?
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="back" size={24} color="white" />
        </TouchableOpacity>
        :
        null
      }

      <Text style={styles.headerTitle}>{title}</Text>
      {
        email
        &&
        <TouchableOpacity onPress={onLogout}>
            <AntDesign name="logout" size={30} color="white" />
        </TouchableOpacity>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 130,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: colors.header,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Afacad-Medium'
    }
})