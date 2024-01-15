import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
    return(
        <Stack.Navigator
                initialRouteName="Perfil"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }  
            >
                <Stack.Screen 
                    name="Perfil"
                    component={Profile}
                />  
                <Stack.Screen 
                    name="Seleccionar imagen"
                    component={ImageSelector}
                />  
            </Stack.Navigator>
    )
}

export default ProfileNavigator