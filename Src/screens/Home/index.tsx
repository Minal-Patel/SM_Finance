import React from "react";
import { ScrollView, Text, View } from "react-native";
import BackgroudThem from "../../components/ThemeBackSM";
import ImageSM from "../../components/maincomponent/ImageSM";
import { IMG } from "../../helper/images";
import TextSM from "../../components/maincomponent/TextSM";
import { BoldTitle, Subtitle } from "../../components/TextsSM";
import { COLOR } from "../../helper/theme";
import CardsSM from "../../components/CardSM";
import TouchableSM from "../../components/maincomponent/TouchableSM";
import { Icon } from "@rneui/themed";
import { homelist } from "../../helper/json";
import { useNavigation } from "@react-navigation/native";
import { NAV } from "../../helper/nav";

const HomeScreen = () => {

    const dummy = [
        {
            id: 1,
            title: 'Loan title',
            price: 300,
            desc: "new one",
            assign: "member1",
            ststus: "pending"
        },
        {
            id: 2,
            title: 'Loan title',
            price: 2000,
            desc: "new one",
            assign: "member1",
            ststus: "pending"

        },


    ]

    const navigation = useNavigation()
    return (
        <BackgroudThem>
            <View style={{ flex: 1, width: "100%" }}>

                <BoldTitle title={"Group Name"} viewStyle={{ alignItems: "center", width: "100%", marginTop: 25, marginBottom: 25 }} textStyle={{ color: COLOR.white }} />

                <View style={{ flexDirection: "row", width: "100%", padding: 15, justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <ImageSM src={IMG.USER} viewStyle={{ width: 75, height: 75, borderRadius: 75 / 2 }} imageStyle={{ borderRadius: 75 / 2, }} />
                        <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                            <Subtitle title={"Minal Patel"} textStyle={{ fontSize: 20, color: COLOR.white }} />
                            <Subtitle title={"User"} textStyle={{ fontSize: 20, fontWeight: "400", color: COLOR.gray[300] }} />
                        </View>
                    </View>

                    <CardsSM viewStyle={{ width: 95, height: 35, alignItem: "center", padding: 0, justifyContant: "center" }}>
                        <Subtitle title={"MAY 2024"} textStyle={{ fontSize: 16, textAlign: "center", color: COLOR.black, marginLeft: 10 }} />
                    </CardsSM>
                </View>


                <View style={{ paddingHorizontal: 25 }}>
                    <Subtitle title={"300"} textStyle={{ fontSize: 25, color: COLOR.white }} />
                    <Subtitle title={"Your next installment...."} textStyle={{ fontSize: 18, fontWeight: "400", color: COLOR.gray[300] }} />
                </View>


                <View style={{ marginTop: 35 }}>

                    <Subtitle title={"Pending Request"} textStyle={{ fontSize: 18, color: "#46d4d6", fontWeight: "600" }} viewStyle={{ marginHorizontal: 15, marginBottom: 15 }} />

                    <ScrollView horizontal={true}>
                        {dummy?.map((item, i) => {
                            return (
                                <CardsSM viewStyle={{ marginRight: 15, justifyContent: "space-between", borderRadius: 10, flexDirection: "row" }}>
                                    <View>
                                        <BoldTitle title={item.title} textStyle={{ color: COLOR.primarytra, fontSize: 18 }} />
                                        <Subtitle title={item?.assign} textStyle={{ fontSize: 16, color: COLOR.blue[100] }} />
                                        <Subtitle title={item?.price} textStyle={{ fontSize: 16, color: COLOR.secondary }} />
                                    </View>
                                    <View>
                                        <Subtitle title={`#${item?.ststus}`} textStyle={{ fontSize: 12, color: COLOR.red[100] }} viewStyle={{ marginLeft: 12 }} />
                                    </View>
                                    {/* <Subtitle title={item.title} textStyle={{ fontSize: 18, color: COLOR.blue[100] }} />
                                    <Subtitle title={item.desc} textStyle={{ fontSize: 18, color: COLOR.blue[100] }} /> */}
                                </CardsSM>
                            )
                        })}
                    </ScrollView>

                    {/* <ScrollView horizontal={true}>
                        {dummy.map((item, i) => {
                            return (
                                <CardsSM viewStyle={{ height: 120, width: 170, marginRight: 15, justifyContent: "space-between", }}>
                                <BoldTitle title={item.price} textStyle={{ color: COLOR.secondary }} />
                                    <Subtitle title={item.title} textStyle={{ fontSize: 18, color: COLOR.blue[100] }} />
                                    <Subtitle title={item.desc} textStyle={{ fontSize: 18, color: COLOR.blue[100] }} />
                                </CardsSM>
                            )
                        })}
                    </ScrollView> */}
                </View>
                <View style={{ flex: 1, backgroundColor: COLOR.white, marginTop: 15 }}>

                    <View>
                        <ScrollView
                        >
                            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 50 }}>
                                {homelist?.map((item, i) => {
                                    return (
                                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center", marginBottom: 50 }}>
                                            <TouchableSM handlePress={() => navigation.navigate(item?.nav)}>
                                                <ImageSM src={item?.image} viewStyle={{ width: 80, height: 80, }} />
                                                <BoldTitle title={item?.title} viewStyle={{ alignItems: "center", width: "100%", marginTop: 15 }} textStyle={{ fontSize: 15, textAlign: "center" }} />
                                            </TouchableSM>
                                        </View>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>

                    <TouchableSM
                        handlePress={() => navigation.navigate(NAV.ADD_INSTALLMENT)}
                        viewStyle={{
                            width: 75,
                            height: 75,
                            borderRadius: 75 / 2,
                            backgroundColor: COLOR.orrange[100],
                            position: "absolute",
                            right: 15,
                            bottom: 15,
                            alignItem: "center",
                            justifyContant: "center"
                        }}>
                        <Icon name="plus" type="entypo" />
                    </TouchableSM>
                </View>
            </View>
        </BackgroudThem>
    )
}

export default HomeScreen