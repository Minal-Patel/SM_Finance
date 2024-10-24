import React, { FC } from "react";
import { Text, View } from "react-native";
import { COLOR } from "../helper/theme";


interface IProps {
    children: any,
    viewStyle?: any
}

const BackgroudThem: FC<IProps> = ({ children, viewStyle }): JSX.Element => {
    return (
        <View style={[{ flex: 1, backgroundColor: COLOR.primary ,alignItems:"center",justifyContent:"center"}, viewStyle]}>
            {children}
        </View>
    )
}

export default BackgroudThem