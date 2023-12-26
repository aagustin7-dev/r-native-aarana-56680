import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {
        navigation.canGoBack()
        ?
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="back" size={24} color="white" />
        </TouchableOpacity>
        :
        <AntDesign name="home" size={24} color="white" />
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: colors.header,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 35,
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})