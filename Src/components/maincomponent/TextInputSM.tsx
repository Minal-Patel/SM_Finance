import React, { FC, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { COLOR } from "../../helper/theme";
import { STR } from "../../helper/string";

interface IProps {
    username: string,
    setUsername: any,
    viewStyle?: any,
    inputStyle?: any,
    textStyle?: any,
    title: string,
    titlecolor?: string,
    animation?: boolean

}

const TextInputSM: FC<IProps> = ({ animation, username, setUsername, viewStyle, textStyle, title, titlecolor, inputStyle }): JSX.Element => {
    const [click, setclick] = useState(false)

    console.log("CLick", username);

    return (
        <View style={{ ...viewStyle, borderBottomWidth: 1, width: "100%", zIndex: -999 }}>

            {click && animation &&
                <Text style={{ fontSize: 18, color: titlecolor ? titlecolor : COLOR.blue[100], fontWeight: "700", ...textStyle }}>{title}</Text>}

            {!animation &&
                <Text style={{
                    fontSize: 18,
                    color: titlecolor ? titlecolor : COLOR.blue[100],
                    fontWeight: "700", ...textStyle,
                    position: "absolute",
                    zIndex: 99,
                    marginTop: -15
                }}>{title}</Text>}
            <TextInput value={username}
                onChangeText={(val) => setUsername(`${val}`)}
                onTouchStart={() => setclick(true)}
                placeholder={click || !animation ? '' : title}
                placeholderTextColor={COLOR.gray[200]}
                style={{
                    width: "100%",
                    borderBottomWidth: 0.5,
                    padding: 0,
                    zIndex: -999,
                    fontSize: 18, fontWeight: "500", ...inputStyle,

                }} />
        </View>
    )
}

export default TextInputSM