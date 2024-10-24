import React, { FC } from "react";
import { Text, View } from "react-native";
import { COLOR } from "../helper/theme";


interface IProps {
    children?: any,
    viewStyle?: any
}

const CardsSM: FC<IProps> = ({ children, viewStyle }): JSX.Element => {
    return (
        <View style={{
           
         //   minHeight: 90,
            borderRadius: 25,
          
            backgroundColor: COLOR.white,
            alignItems: "center",
            justifyContent: "center", padding: 25,
            ...viewStyle
        }}>
            {children}
        </View>
    )
}

export default CardsSM

