import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signupSchema } from '../validations/signupSchema'

const Signup = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [triggerSignup, result] = useSignUpMutation()

    const onSubmit = () => {
      setEmailError("")
      setPasswordError("")
      setConfirmPasswordError("")
      try {
        signupSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
      } catch (error) {
        error.errors.map(e => {
          console.log(Object.keys(e)[0])
          const customError = Object.values(e)[0]
          switch (Object.keys(e)[0]) {
            case "empty_email":
              setEmailError(customError)
            case "invalid_email":
              setEmailError(customError)
            case "empty_password":
              setPasswordError(customError)
            case "invalid_password":
              setPasswordError(customError)
            case "invalid_confirm_password":
              setConfirmPasswordError(customError)
            case "invalid_match_password":
              setConfirmPasswordError(customError)
            default:
              break
          }

        });
      }
      triggerSignup({ email, password })

    }

    const dispatch = useDispatch()

    useEffect(() => {
        if(result.data){
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
      <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Input
                label="Email:"
                onChange={setEmail}
                error={emailError}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
                error={passwordError}
            />
            <Input
                label="Repetir contraseña:"
                onChange={setConfirmPassword}
                isSecureEntry={true}
                error={confirmPasswordError}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.subtitleLink}>Ingresar</Text>
                </TouchableOpacity>
            </View>
      </KeyboardAvoidingView>
    )
}

export default Signup

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
      fontSize: 15,
    },
    subtitleLink: {
      fontFamily: "Afacad-Regular",
      color: "#fff",
      fontSize: 14,
      textDecorationLine: 'underline'
    }
  })