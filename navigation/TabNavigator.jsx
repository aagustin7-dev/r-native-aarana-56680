import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native'
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";
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
                            <Entypo name="shop" size={30} color={focused?"white":"#ccc"} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <AntDesign name="shoppingcart" size={30} color={focused?"white":"#ccc"} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="OrderStack" 
                    component={OrdersNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="reorder" size={30} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="ProfileStack" 
                    component={ProfileNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="user-o" size={30} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.tabNavigator,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25,
        borderRadius: 10,
        padding: 20
    }
})