import React, { useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import HEADER from "../../components/Header";
import ImageSM from "../../components/maincomponent/ImageSM";
import { assignmembers, groupdetail } from "../../helper/json";
import { BoldTitle, Subtitle } from "../../components/TextsSM";
import { COLOR } from "../../helper/theme";
import { color } from "@rneui/base";
import TouchableSM from "../../components/maincomponent/TouchableSM";

const GroupScreen = () => {

    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState({})
    return (
        <View style={{ flex: 1 }}>
            <HEADER back={true} title="Group Name" />


            {/* ---------------------Leader detail-------------------------------- */}

            <View style={{
                width: 220,
                height: 220,
                borderRadius: 220 / 2,
                borderWidth: 3,
                borderColor: COLOR.secondary,
                alignSelf: "center", marginTop: 50,
                marginBottom: 50
            }}>
                <View style={{ alignItems: "center", marginTop: -25 }}>
                    <ImageSM src={assignmembers[0].img} imageStyle={{}} viewStyle={{ width: 55, height: 55, borderRadius: 55 / 2 }} />
                    <BoldTitle
                        title={assignmembers[0].title}
                        textStyle={{ fontSize: 15, color: COLOR.secondary, textAlign: "center" }}
                        viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                    />
                    <BoldTitle
                        title={assignmembers[0].type}
                        textStyle={{ fontSize: 15, color: COLOR.orrange[100], textAlign: "center" }}
                        viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                    />
                </View>

                <View style={{ flexDirection: "row", bottom: 20, position: "absolute", width: "110%", alignSelf: "center", justifyContent: "space-between" }}>
                    <View style={{ alignItems: "center", backgroundColor: COLOR.white }}>
                        <ImageSM src={assignmembers[1].img} imageStyle={{}} viewStyle={{ width: 55, height: 55, borderRadius: 55 / 2 }} />
                        <BoldTitle
                            title={assignmembers[1].title}
                            textStyle={{ fontSize: 18, color: COLOR.secondary, textAlign: "center" }}
                            viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                        />
                        <BoldTitle
                            title={assignmembers[1].type}
                            textStyle={{ fontSize: 15, color: COLOR.orrange[100], textAlign: "center" }}
                            viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                        />
                    </View>
                    <View style={{ alignItems: "center", backgroundColor: COLOR.white }}>
                        <ImageSM src={assignmembers[2].img} imageStyle={{}} viewStyle={{ width: 55, height: 55, borderRadius: 55 / 2 }} />
                        <BoldTitle
                            title={assignmembers[2].title}
                            textStyle={{ fontSize: 18, color: COLOR.secondary, textAlign: "center" }}
                            viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                        />
                        <BoldTitle
                            title={assignmembers[2].type}
                            textStyle={{ fontSize: 15, color: COLOR.orrange[100], textAlign: "center" }}
                            viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                        />
                    </View>
                </View>
            </View>


            {/* ---------------------Group detail-------------------------------- */}

            <ScrollView>
                <View style={{ padding: 25, marginTop: 25 }}>
                    {groupdetail.map((group, i) => {
                        if (i > 2)
                            return (
                                <View style={{ width: "100%", flexDirection: "row", padding: 15, marginBottom: 15, alignItems: "center", elevation: 10, backgroundColor: COLOR.white }}>
                                    <ImageSM src={group?.img} viewStyle={{ width: 50, height: 50, borderRadius: 15 }} />
                                    <View style={{ height: "100%", marginLeft: 15 }}>
                                        <Subtitle title={group?.name} textStyle={{ fontSize: 16, color: COLOR.orrange[100] }} />
                                        <Subtitle title={group.number} textStyle={{ fontSize: 14, color: COLOR.black, marginTop: 10 }} />
                                    </View>

                                    <TouchableSM handlePress={() => { setSelected(group), setVisible(true) }} viewStyle={{ position: "absolute", right: 15, backgroundColor: COLOR.secondary, padding: 8, paddingHorizontal: 20 }}>
                                        <Subtitle title={"View"} textStyle={{ fontSize: 14, color: COLOR.white }} />
                                    </TouchableSM>

                                </View>
                            )
                    })}
                </View>
            </ScrollView>


            <Modal visible={visible} transparent={true} >
                <View
                    style={{
                        flex: 1,
                        height: "100%",
                        backgroundColor: "rgba(22,20,37,0.7)",

                    }}
                    
                >
                    <View style={{ flex: 1, backgroundColor: COLOR.white, marginTop: "50%", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                        <ImageSM
                            src={selected?.img}
                            imageStyle={{ borderRadius: 150 }}
                            viewStyle={{
                                backgroundColor: COLOR.white,
                                width: 150,
                                height: 150,
                                borderRadius: 150 / 2,
                                alignSelf: "center",
                                padding: 8,
                                marginTop: -65
                            }} />
                        <Subtitle title={"Active loan"} textStyle={{ fontSize: 15, color: COLOR.secondary, fontWeight: "600" }} viewStyle={{ position: "absolute", marginTop: 15, marginLeft: 30 }} />

                        <Subtitle
                            title={selected?.activeloan}
                            textStyle={{ fontSize: 14 }}
                            viewStyle={{
                                position: "absolute",
                                marginTop: 35,
                                marginLeft: 55,
                                alignItems: "center"
                            }}
                        />
                        <BoldTitle
                            title={selected?.name}
                            textStyle={{ fontSize: 25, color: COLOR.black, textAlign: "center", textTransform: "capitalize" }}
                            viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                        />
                        <BoldTitle
                            title={selected?.designation}
                            textStyle={{ fontSize: 18, color: COLOR.gray[200], textAlign: "center", textTransform: "capitalize" }}
                            viewStyle={{ alingItems: "center", justifyContent: "center", width: "100%" }}
                        />

                        {/* <Text style={{}}>dsd</Text> */}

                       
                    </View>
                    <TouchableSM handlePress={() => setVisible(!visible)} viewStyle={{
                            position :"absolute",
                            right:15,
                            top:25
                            }}>
                            <Text style={{color:COLOR.secondary}}>close</Text>
                        </TouchableSM>

                </View>

            </Modal>

        </View>
    )
}

export default GroupScreen