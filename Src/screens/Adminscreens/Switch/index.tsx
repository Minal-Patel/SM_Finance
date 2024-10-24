import React from "react";
import { View, Text } from "react-native";
import TouchableSM from "../../../components/maincomponent/TouchableSM";
import ImageSM from "../../../components/maincomponent/ImageSM";
import { IMG } from "../../../helper/images";
import { Subtitle } from "../../../components/TextsSM";
import { STR } from "../../../helper/string";
import { COLOR } from "../../../helper/theme";
import { useNavigation } from "@react-navigation/native";
import { NAV } from "../../../helper/nav";

const Switchscreen = () => {

    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>     
            <TouchableSM
                handlePress={() => navigation.navigate(NAV.A_DRAWERNAV , {screen : NAV.A_DASHBOARD})}
                viewStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40%"
                }}>
                {/* <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}> */}
                <ImageSM
                    src={IMG.USER}
                    viewStyle={{
                        width: 120,
                        height: 120,
                        borderRadius: 120,
                        borderWidth: 3,
                        borderColor: COLOR.orrange[100]
                    }}
                    imageStyle={{
                        width: 105,
                        height: 105,
                        borderRadius: 105
                    }}
                />
                <Subtitle title={STR.ADMIN} viewStyle={{ width: "100%", alignItems: "center", }} />
                {/* </View> */}
            </TouchableSM>

            <TouchableSM handlePress={() => console.log("DDD")} viewStyle={{ alignItems: "center", justifyContent: "center", width: "40%" }}>
                {/* <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}> */}
                <ImageSM src={IMG.USER} viewStyle={{
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    borderWidth: 3,
                    borderColor: COLOR.secondary
                }}
                    imageStyle={{
                        width: 105,
                        height: 105,
                        borderRadius: 105
                    }} />
                <Subtitle title={STR.USER} viewStyle={{ width: "100%", alignItems: "center" }} />
                {/* </View> */}
            </TouchableSM>
        </View>
    )
}
export default Switchscreen