import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons'

const Search = ({onSearchHandlerEvent}) => {

  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')

  /* Función que verificará si el texto ingresado en el Input es válido o no */

  const onSearchHandler = () => {
    const regEx = /[^\w\s]/
    if(regEx.test(searchInput)){
        setError("Solo se admiten letras y numeros")
        setSearchInput("")
    }else{
        setError("")
        onSearchHandlerEvent(searchInput)
    }
  }

  /* Función que resetea el searchInput al hacer click en el icono de X */
  
  const onResetSearchHandler = () => {
    setSearchInput("");
    onSearchHandlerEvent(searchInput)
  }

  return (
    <>
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={setSearchInput}
        placeholder='Buscar...'
        value={searchInput}
      />
      <TouchableOpacity onPress={()=>onSearchHandler(searchInput)}>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>onResetSearchHandler()}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
    {
        error?
        <View><Text>{error}</Text></View>
        :
        null
    }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    textInput: {
        width: '80%'
    }
})