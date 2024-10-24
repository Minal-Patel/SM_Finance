import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import { COLOR } from "../helper/theme";
import { BoldTitle, Subtitle } from "./TextsSM";
import { Icon } from "@rneui/themed";
import TouchableSM from "./maincomponent/TouchableSM";
import { installmenttype } from "../helper/json";


interface IProps {
    value: string,
    onPress: any,
    viewStyle?: any,
    dropvalue: object,
    textview?: any,
    dropview?: any,
    dropsubView?: any,
    droptext?: any,
    inputView?: object,
    textstyle?: object
    // children?: any,
    // viewStyle?: any
}

const DropdownSM: FC<IProps> = ({ value, onPress, inputView, viewStyle, dropvalue, textview, dropview, dropsubView, droptext, textstyle }): JSX.Element => {

    const [open, setOpen] = useState(false)

    const handlePress = (val: string) => {
        onPress(val)
        setOpen(false)
    }

    console.log("DROP", typeof dropvalue);

    return (
        <View style={{ ...viewStyle, flex: 1 }}>
            <View style={{
                
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: COLOR.white,
                height: 35,
                alignItems: "flex-end", justifyContent: "space-between", paddingBottom: 5,
                paddingHorizontal: 10,...inputView,

            }}>
                <Text style={{fontSize: 15, color: COLOR.white ,  ...textview,  }}>{value}</Text>
                <TouchableSM handlePress={() => setOpen(!open)}>
                    <Text style={{ fontSize: 14, color: COLOR.white, ...textstyle }}> click</Text>
                </TouchableSM>


            </View>
            {open &&
                <View style={{  backgroundColor: COLOR.white, borderRadius: 10, padding: 15, marginTop: 10, zIndex: 1, height: 120 ,...dropview, }}>
                    {dropvalue?.map((item: object, i: number) => {
                        console.log("#####", item)
                        return (
                            <TouchableSM viewStyle={{  borderBottomWidth: 1, paddingVertical: 5, ...dropsubView,}} handlePress={() => handlePress(item?.title)}>
                                <Text style={{  fontSize: 18, color: COLOR.orrange[100],...droptext, }}>{item?.title}</Text>
                            </TouchableSM>
                        )
                    })}
                </View>
            }
        </View>
    )
}

export default DropdownSM

