import React from "react";
import { View, Text } from "react-native";
import { A_COLOR, COLOR } from "../../../helper/theme";
import ImageSM from "../../../components/maincomponent/ImageSM";
import { IMG } from "../../../helper/images";
import { BoldTitle, Subtitle } from "../../../components/TextsSM";
import { groupdetail } from "../../../helper/json";
import TouchableSM from "../../../components/maincomponent/TouchableSM";
import TextSM from "../../../components/maincomponent/TextSM";

const Grouplist = () => {
    return (
        <View style={{ flex: 1, backgroundColor: A_COLOR.white, alignItems: "center", paddingTop: 75 }}>

            <ImageSM src={IMG.USER} viewStyle={{ width: 75, height: 75 }} />
            <BoldTitle title={"Group Name"} viewStyle={{ alignItems: "center", width: "100%" }} textStyle={{ fontSize: 21, color: A_COLOR.primaryDark }} />

            <View style={{ marginTop: "15%", backgroundColor: A_COLOR.primary, flex: 1, height: "100%", width: "100%", borderTopLeftRadius: 75, borderTopRightRadius: 75, padding: 35, paddingVertical: 65 }}>
                <Subtitle title={"Members"} textStyle={{ color: A_COLOR.white, fontSize: 20 , fontWeight:"bold" }} />

                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

                    {groupdetail.map((mem, i) => {
                        return (
                            <TouchableSM viewStyle={{ marginTop: 15, marginRight: 15 }} handlePress={() => console.log("####")}>
                                <ImageSM src={mem.img} viewStyle={{ width: 55, height: 55, borderRadius: 75 / 2 }} imageStyle={{ borderRadius: 75 / 2 }} />
                                <TextSM title={mem?.name} viewStyle={{ marginTop: 5 }} textStyle={{ fontSize: 14, color: A_COLOR.gray[100], fontWeight: "800" }} />
                                <TextSM title={mem?.type} viewStyle={{ marginTop: 5, alignItems: "center" }} textStyle={{ fontSize: 14, color: A_COLOR.gray[200], fontWeight: "400" }} />
                            </TouchableSM>
                        )
                    })}
                </View>
            </View>

        </View>
    )
}

export default Grouplist