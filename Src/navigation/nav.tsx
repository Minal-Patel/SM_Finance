import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login";
import DrawerNav from "./DrawerNav";
import { NAV } from "../helper/nav";
import Switchscreen from "../screens/Adminscreens/Switch";
import AdminDrawerNav from "./AdminDrawer";



const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={NAV.A_DRAWERNAV} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NAV.LOGIN_NAV} component={LoginScreen} />

                <Stack.Screen name={NAV.SWITCH_SCREEN} component={Switchscreen} />

                <Stack.Screen name={NAV.DRAWER_NAV} component={DrawerNav} />
                <Stack.Screen name={NAV.A_DRAWERNAV} component={AdminDrawerNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation