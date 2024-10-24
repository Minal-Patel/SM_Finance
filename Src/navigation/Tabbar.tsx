import { Icon } from "@rneui/themed";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { COLOR } from "../helper/theme";
import { BoldTitle } from "../components/TextsSM";
import TextSM from "../components/maincomponent/TextSM";
import { color } from "@rneui/base";
import TouchableSM from "../components/maincomponent/TouchableSM";
import { useNavigation } from "@react-navigation/native";
import { NAV } from "../helper/nav";
import { Tabjson } from "../helper/json";

interface IProps {
    props?: any
}

// User screen

const Tabbar: FC<IProps> = ({ props }): JSX.Element => {

    const navigation = useNavigation()

    // Get current screen
    const currentscreen = navigation?.getState()?.routes[0]?.params?.screen

    return (
        <View style={{
            flexDirection: "row",
            backgroundColor: COLOR.primary,
            borderRadius: 25,
            marginBottom: 15,
            margin: 5,
            height: 80,
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>

            {Tabjson.map((tab, i) => {
                return (
                    <TouchableSM viewStyle={{ justifyContent: "space-between", alignItems: "center" }} handlePress={() => navigation.navigate(NAV?.TAB_NAV, { screen: tab?.nav })}>
                        <Icon
                            name='sc-telegram'
                            type='evilicon'
                            color={currentscreen === tab.nav ? COLOR.secondary : COLOR.white}
                            size={28}
                        />
                        <TextSM
                            title={tab.name}
                            textStyle={{
                                fontSize: 16,
                                fontWeight: currentscreen === tab.nav ? "800" : "500",
                                color: currentscreen === tab.nav ? COLOR.secondary : COLOR.white
                            }} />

                    </TouchableSM>
                )
            })}

        </View>
    )
}

export default Tabbar