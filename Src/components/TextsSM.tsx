import React, { FC } from "react";
import { View, Text } from "react-native";
import TextSM from "./maincomponent/TextSM";
import { COLOR } from "../helper/theme";

interface IProps {
    title: string | number,
    viewStyle?: any,
    textStyle?: any
}

export const BoldTitle: FC<IProps> = ({ title, viewStyle, textStyle }): JSX.Element => {
    return (
        <View style={{ ...viewStyle, alignSelf: "flex-start" }}>

            <TextSM textStyle={{ fontSize: 30, color: COLOR.black, fontWeight: "800", ...textStyle , }} title={title} />
        </View>
    )
}


export const Subtitle: FC<IProps> = ({ title, viewStyle, textStyle }): JSX.Element => {
    return (
        <View style={{ ...viewStyle, alignSelf: "flex-start" }}>

            <TextSM textStyle={{ fontSize: 18, color: COLOR.gray[100], fontWeight: "600", ...textStyle }} title={title} />
        </View>
    )
}


export const InputTitle: FC<IProps> = ({ title, viewStyle, textStyle }): JSX.Element => {
    return (
        <View style={{ ...viewStyle }}>

            <TextSM textStyle={{ fontSize: 18, color: COLOR.gray[100], ...textStyle }} title={title} />
        </View>
    )
}
