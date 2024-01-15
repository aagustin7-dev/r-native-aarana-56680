import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const Login = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn({email, password})
        console.log(result)
    }
    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <View style={styles.container}>
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear una</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.header,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      gap: 10,
    },
    btn: {
      padding: 10,
      backgroundColor: colors.card,
      borderRadius: 8,
      margin: 5,

    },
    btnText: {
      color: "#fff",
      fontFamily: "Afacad-SemiBold"
    },
    altContainer: {
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    subtitle: {
      color: "#fff",
      fontFamily: "Afacad-SemiBold",
      fontSize: 12,
    },
    subtitleLink: {
      fontFamily: "Afacad-Regular",
      color: "#fff",
      fontSize: 11,
      textDecorationLine: 'underline'
    }
  })