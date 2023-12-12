import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, returnHomeHandlerEvent }) => {

  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable onPress={returnHomeHandlerEvent}>
        <AntDesign name="home" size={24} color="#fff" />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: colors.header,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 35,
        marginLeft: 30,
        marginTop: 50,
        marginRight: 30,
        borderRadius: 15
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})