import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLOR } from "../../helper/theme";

interface IProps {
    title: string | number,
    handlePress: any,
    viewStyle?: any,
    textStyle?: any,

}

const ButtonSM: FC<IProps> = ({ title, viewStyle, textStyle, handlePress }): JSX.Element => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLOR.secondary,
            marginTop: 25,
            width: "100%",
            height: 55,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            ...viewStyle
        }}
            onPress={() => handlePress()}>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                color: COLOR.black, ...textStyle,
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSM