import React, { useState } from "react";
import { View, Alert, ScrollView, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

// Custome components
import ImageSM from "../../../components/maincomponent/ImageSM";
import TextSM from "../../../components/maincomponent/TextSM";
import { BoldTitle, Subtitle } from "../../../components/TextsSM";
import TouchableSM from "../../../components/maincomponent/TouchableSM";

// App functionality helper
import { A_COLOR, COLOR } from "../../../helper/theme";
import { IMG } from "../../../helper/images";
import { adminmenu, pendingaprrove_ins } from "../../../helper/json";


// Admin screen
const Dashboard = () => {

    const [notification, setNotification] = useState(false)

    const navigation = useNavigation()

    // Logout function
    const handlelogout = () => {
        Alert.alert("Under production")
    }
    return (
        <View style={styles.mainView}>

            {/*------------------------------ Group name and logout views -------------------------------*/}

            <View style={styles.groupView} >
                <BoldTitle title={"Group Name"} viewStyle={styles.grouptitleView} textStyle={styles.grouptext} />

                <TouchableSM handlePress={() => handlelogout()} viewStyle={styles.logoutView}>
                    <Icon name="logout" type="antdesign" color={COLOR.primary} />
                </TouchableSM>
            </View>


            {/*------------------------------ User name and notification view -------------------------------*/}


            <View style={styles.nameandnotifyView} >
                <ImageSM src={IMG.USER}
                    viewStyle={styles.usericonview}
                    imageStyle={styles.userimgstyle} />

                <View style={{ marginLeft: 15 }}>
                    <BoldTitle title={"User Name"} textStyle={styles.usernametitlestyle} />
                    <Subtitle title={"Minister"} textStyle={styles.usernametypestyle} />
                </View>

                <TouchableSM handlePress={() => console.log("DDDD")} viewStyle={styles.notificationView}>
                    <Icon name="notifications" type="material" color={COLOR.primary} />
                    {notification &&
                        <View style={styles.notificationpoint}></View>
                    }
                </TouchableSM>
            </View>

            {/*------------------------------ Pending Approvements -------------------------------*/}

            <View style={styles.approvalview}>
                <ScrollView >
                    <View style={{ flex: 1 }}>

                        <Subtitle title={"Pending approvements"} textStyle={styles.approcaltitle} />

                        <View style={{ alignSelf: "center" }}>
                            <ScrollView horizontal={true} nestedScrollEnabled={true} style={{ height: 150 }}>
                                {pendingaprrove_ins.map((pending, i) => {
                                    return (
                                        <View
                                            style={styles.approvalmapview}
                                        >
                                            <TextSM
                                                title={pending?.name}
                                                textStyle={styles.approvalname} />
                                            <TextSM
                                                title={pending?.paymenttype}
                                                textStyle={styles.approvaltype} />

                                            <View style={styles.actionview}>
                                                <TouchableSM handlePress={() => console.log("rrr")}>
                                                    <Icon name="check-circle" type="font-awesome-5" color={COLOR.secondary} />
                                                </TouchableSM>
                                                <TouchableSM handlePress={() => console.log("rrr")}>
                                                    <Icon name="close-circle" type="material-community" color={A_COLOR.red[100]} />
                                                </TouchableSM>
                                            </View>

                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>

            {/*------------------------------ Other categoty action view -------------------------------*/}
            <View style={{ flex: 1, backgroundColor: A_COLOR.primary, width: "105%", borderRadius: 75 }}>
                <ScrollView>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 15, justifyContent: "space-evenly", }}>
                        {adminmenu?.map((admin: object, i: number) => {
                            return (
                                <TouchableSM
                                    viewStyle={{
                                        alignItem: "center",
                                        marginHorizontal: 10,
                                        marginBottom: 25,
                                        alignItems: "center",
                                        justyfyContent: "center"
                                    }}
                                    key={i}
                                    handlePress={() => { admin?.nav === undefined ? Alert.alert("Under production") : navigation.navigate(admin?.nav) }}>
                                    <View
                                        style={{
                                            width: 40,
                                            height: 40,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: A_COLOR.primaryDark,
                                            borderRadius: 40 / 2
                                        }}>
                                        <Icon
                                            name={admin?.iname}
                                            type={admin?.type}
                                            color={COLOR.white}
                                        />
                                    </View>

                                    <Subtitle
                                        title={admin?.title}
                                        viewStyle={{
                                            alignItems: "center",
                                            alignSelf: "center"
                                        }}
                                        textStyle={{
                                            color: A_COLOR.white,
                                            fontSize: 14,
                                            textAlign: "center"
                                        }} />
                                </TouchableSM>
                            )
                        })}

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: A_COLOR.primarylight, alignItems: "center", padding: 25 },

    groupView: { flexDirection: "row", width: "100%", marginTop: 25 },
    grouptitleView: { width: "100%", alignItems: "center", marginBottom: 10 },
    grouptext: { color: A_COLOR.primaryDark },
    logoutView: { position: "absolute", right: 0 },

    nameandnotifyView: { flexDirection: "row", width: "100%", marginTop: 25 },
    usericonview: { width: 60, height: 60, borderRadius: 60, borderWidth: 1, alignItems: "center", justifyContent: "center" },
    userimgstyle: { width: 40, height: 40, borderRadius: 40 / 2 },
    usernametitlestyle: { fontSize: 20, color: A_COLOR.black },
    usernametypestyle: { fontSize: 15, color: A_COLOR.secondary, fontWeight: "800" },
    notificationView: { position: "absolute", right: 0 },
    notificationpoint: { width: 10, height: 10, borderRadius: 10, backgroundColor: COLOR.red[100], position: "absolute", right: -5, top: 5 },

    approvalview: { backgroundColor: A_COLOR.primarylight, width: "100%", marginTop: 30 },
    approcaltitle: { fontSize: 19, marginLeft: 15, color: A_COLOR.gray[200], fontWeight: "700" },
    approvalmapview: {
        width: 180,
        height: 75,
        backgroundColor: COLOR.white,
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 15,
        padding: 15,
        elevation: 15,

    },
    approvalname: {
        fontSize: 15,
        fontWeight: "600",
        color: A_COLOR.red[100]
    },
    approvaltype: {
        fontSize: 13,
        fontWeight: "400",
        color: A_COLOR.gray[200]
    },
    actionview: { position: "absolute", flexDirection: "row", right: 5, alignItems: "center", justifyContent: "center", height: 75 },
})