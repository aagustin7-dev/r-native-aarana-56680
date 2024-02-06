import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../global/colors'

const Input = ({ label, isSecureEntry = false, error = "", onChange }) => {
    
    const [input, setInput] = useState()

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onHandleChangeText}
                secureTextEntry={isSecureEntry}
                value={input}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:'center',
        width: '70%'
    },
    input:{
        borderWidth:1,
        borderColor:colors.header,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.card,
        color: "#fff",
        padding: 15
    },
    label:{
        fontFamily:'Afacad-SemiBold',
        color: "#fff",
        paddingLeft:5,
        marginBottom:4,
        fontSize: 20
    },
    error:{
        padding: 12,
        color: "#FFF",
    }
})