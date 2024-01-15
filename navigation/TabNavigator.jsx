import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native'
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar

                }}
            >
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Entypo name="shop" size={24} color={focused?"white":"#ccc"} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <AntDesign name="shoppingcart" size={24} color={focused?"white":"#ccc"} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="OrderStack" 
                    component={OrdersNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="reorder" size={24} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.footer,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25,
        borderRadius: 10
        
    }
})