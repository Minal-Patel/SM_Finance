import React, { FC } from "react";
import { View, Text } from 'react-native'
import { COLOR } from "../helper/theme";
import { Icon } from "@rneui/themed";
import TextSM from "./maincomponent/TextSM";
import { BoldTitle } from "./TextsSM";

interface IProps {
    title: string,
    back: boolean,
    viewStyle?: any,
    textViewstyle?: any,
    textStyle?: any
}

const HEADER: FC<IProps> = ({ title, back, viewStyle, textViewstyle, textStyle }): JSX.Element => {
    return (
        <View style={{
            width: "100%",
            backgroundColor: COLOR.primary,
            height: 85,
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            ...viewStyle
        }}>

            {back &&
                <Icon name="back" type="entypo" color={COLOR.white} />}

            <BoldTitle title={title} textStyle={{ marginLeft: 20, fontSize: 20, color: COLOR.white, ...textStyle }} viewStyle={{ alingItems: "center", justifyContent: "center", height: "100%", ...textViewstyle }} />
        </View>
    )
}

export default HEADER