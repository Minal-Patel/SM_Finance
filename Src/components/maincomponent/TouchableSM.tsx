import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLOR } from "../../helper/theme";

interface IProps {

    handlePress: any,
    viewStyle?: any,
    textStyle?: any,
    children: any

}

const TouchableSM: FC<IProps> = ({ viewStyle, children, handlePress }): JSX.Element => {
    return (
        <TouchableOpacity style={{

            ...viewStyle
        }}
            onPress={() => handlePress()}>
            {children}
        </TouchableOpacity>
    )
}

export default TouchableSM