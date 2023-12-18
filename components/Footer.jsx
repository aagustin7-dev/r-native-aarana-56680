import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image
        source={{uri: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png" }}
        resizeMode='contain'
        style={styles.logoReactNativeImg}
      />
      <Image
        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png" }}
        resizeMode='contain'
        style={styles.logoCoderImg}
      />
      <Image
        source={{uri: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png" }}
        resizeMode='contain'
        style={styles.logoReactNativeImg}
      />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.footer,
        flexDirection: 'row',
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 0
    },
    footerComment: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    logoCoderImg: {
        width: 150,
        height: 150
    },
    logoReactNativeImg: {
        width: 35,
        height: 35
    }
})