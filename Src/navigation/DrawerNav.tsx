import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from "./TabNav";
import { NAV } from "../helper/nav";
import LoandetailScreen from "../screens/Loandetail/Loandetail";
import AddInstallment from "../screens/AddInstallment";

const Drawer = createDrawerNavigator();


const DrawerNav = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName={NAV.TAB_NAV}>
            <Drawer.Screen name={NAV.TAB_NAV} component={TabNav} />
            <Drawer.Screen name={NAV.LOAN_DETAIL_NAV} component={LoandetailScreen} options={{ headerShown: true }} />
            <Drawer.Screen name={NAV.ADD_INSTALLMENT} component={AddInstallment} />
        </Drawer.Navigator>
    )
}

export default DrawerNav