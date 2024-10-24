import React, { FC } from "react";
import { Text, View } from "react-native";
import { COLOR } from "../helper/theme";
import { Subtitle } from "./TextsSM";
import TouchableSM from "./maincomponent/TouchableSM";


interface IProps {
    title: string,
    viewStyle?: any,
    jsonvalues?: object,
    value: string,
    onpress: any
}

const SelectorSM: FC<IProps> = ({ title, viewStyle, jsonvalues, value, onpress }): JSX.Element => {
    return (
        <View style={{ width: "100%", ...viewStyle }}>

            <Subtitle title={title} textStyle={{ color: COLOR.gray[200] }} />

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 15, }}>
                {jsonvalues?.map((item, i) => {
                    const val = item?.title
                    return (
                        <TouchableSM handlePress={() => onpress(val)}
                            viewStyle={{
                                backgroundColor: val === value ? COLOR.secondary : COLOR.white,
                                padding: 10, paddingHorizontal: 20, borderRadius: 15, marginRight : 15

                            }}>
                            <Subtitle title={val} textStyle={{ color: val === value ? COLOR.white : COLOR.black }} />
                        </TouchableSM>
                    );
                })}
            </View>
        </View>
    )
}

export default SelectorSM