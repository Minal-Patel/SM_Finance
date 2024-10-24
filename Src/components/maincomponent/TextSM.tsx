import React, { FC } from "react";
import { View, Text } from "react-native";
import { COLOR } from "../../helper/theme";

interface IProps {
    title: string | number,
    viewStyle?: any,
    textStyle?: any,
    children?: any,
}

const TextSM: FC<IProps> = ({ title, viewStyle, textStyle, children }): JSX.Element => {
    return (
        <View style={{ ...viewStyle }}>
            <Text style={{ fontSize: 14, color: COLOR.black, ...textStyle, }}>{title}{children}</Text>
        </View>
    )
}

export default TextSM