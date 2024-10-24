import React from "react";

import HomeScreen from "../screens/Home";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAV } from "../helper/nav";
import MyaccountScreen from "../screens/Myaccount";
import GroupScreen from "../screens/Groupdetail";
import ProfileScreen from "../screens/Profile";
import Tabbar from "./Tabbar";
import PostfolioScreen from "../screens/Potfolio";
import PotfoliyoScreen from "../screens/Potfolio";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(tab) => <Tabbar props={tab}/>}>
            <Tab.Screen name={NAV.HOME_NAV} component={HomeScreen} />
            <Tab.Screen name={NAV.GROUP_NAV} component={GroupScreen} />
            <Tab.Screen name={NAV.PORTFOLIO_NAV} component={PotfoliyoScreen} />
            <Tab.Screen name={NAV.PROFILE_NAV} component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabNav