import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/Home";
import TabNav from "./TabNav";
import { NAV } from "../helper/nav";
import LoandetailScreen from "../screens/Loandetail/Loandetail";
import AddInstallment from "../screens/AddInstallment";
import Dashboard from "../screens/Adminscreens/Dashboard";
import Approvment from "../screens/Adminscreens/Approvement";
import Grouplist from "../screens/Adminscreens/GroupList";
import Loan from "../screens/Adminscreens/Loan";
import Loandetail from "../screens/Adminscreens/Loan/Loandetail";
import AddUser from "../screens/Adminscreens/AddUser";

const Drawer = createDrawerNavigator();


const AdminDrawerNav = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName={NAV.A_DASHBOARD}>
            <Drawer.Screen name={NAV.A_DASHBOARD} component={Dashboard} />
            <Drawer.Screen name={NAV.A_APPROVEMENT} component={Approvment} />
            <Drawer.Screen name={NAV.A_GROUPLIST} component={Grouplist} />
            <Drawer.Screen name={NAV.A_LOAN} component={Loan} />
            <Drawer.Screen name={NAV.A_ADDUSER} component={AddUser} />
            <Drawer.Screen name={NAV.A_LOANDETAIL} component={Loandetail} />
        </Drawer.Navigator>
    )
}

export default AdminDrawerNav