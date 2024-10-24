import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import BackgroudThem from "../../components/ThemeBackSM";
import TextSM from "../../components/maincomponent/TextSM";
import { COLOR } from "../../helper/theme";
import { BoldTitle, InputTitle, Subtitle } from "../../components/TextsSM";
import CardsSM from "../../components/CardSM";
import { STR } from "../../helper/string";
import TextInputSM from "../../components/maincomponent/TextInputSM";
import ButtonSM from "../../components/maincomponent/ButtonSM";
import { JumpingTransition } from "react-native-reanimated";
import ImageSM from "../../components/maincomponent/ImageSM";
import { IMG } from "../../helper/images";
import { useNavigation } from "@react-navigation/native";
import { NAV } from "../../helper/nav";
import { Screen } from "react-native-screens";

const LoginScreen = () => {

    const [mnumber, setMnumber] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const login = () => {
       // navigation.navigate(NAV.DRAWER_NAV, { Screen: NAV.HOME_NAV })
       navigation.navigate(NAV.SWITCH_SCREEN)


    }

    return (
        <View style={{ flex: 1, width: "100%", height: "100%", justifyContent: "space-between" }}>
            <View style={{ width: "100%", height: "30%", justifyContent: "center" }}>
                <ImageSM src={IMG.LOGIN} viewStyle={{ width: 150, height: 150, alignSelf: "center" }} />
            </View>
            <View style={{ padding: 15, flex: 1, marginTop: 25 }}>
                <BoldTitle title={STR.LOGIN} viewStyle={{ alignItem: "flex-start" }} />
                <Subtitle title={STR.WELCOME_LOGIN} viewStyle={{ alignItem: "flex-start", marginTop: 20 }} />

                <TextInputSM username={mnumber}
                    setUsername={setMnumber}
                    title={STR.MOBILE_NUMBER}
                    viewStyle={{ marginTop: 70 }}
                />

                <TextInputSM username={password}
                    setUsername={setPassword}
                    viewStyle={{ marginTop: 70 }}
                    title={STR.PASSWORD}
                />

                <ButtonSM title={"Login"} handlePress={login} />
            </View>

        </View>
    )
}

export default LoginScreen