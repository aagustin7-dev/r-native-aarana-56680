import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Header from "../components/Header"

// Importamos las vistas

import Categories from "../screens/Categories"
import ProductsBycategory from "../screens/ProductsByCategory"
import ProductDetail from "../screens/ProductDetail"

const Stack = createNativeStackNavigator()


const Navigator = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Categorias"
            screenOptions={
                ({navigation, route}) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            
            }
        >
            <Stack.Screen 
                name="Categorias"
                component={Categories}
            />
            <Stack.Screen 
                name="Productos"
                component={ProductsBycategory}
            />
            <Stack.Screen 
                name="Detalle"
                component={ProductDetail}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
