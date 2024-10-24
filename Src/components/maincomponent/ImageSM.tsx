import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { COLOR } from "../../helper/theme";
import { IMG } from "../../helper/images";

interface IProps {
    src: any,
    viewStyle?: any,
    imageStyle?: any
}

const ImageSM: FC<IProps> = ({ src, viewStyle, imageStyle  }): JSX.Element => {
    return (
        <View style={{ alignItems: "center", ...viewStyle ,}}>
            <Image source={src} style={{  width: "100%", height: "100%",resizeMode:"stretch", ...imageStyle,  }} />
        </View>
    )
}

export default ImageSM