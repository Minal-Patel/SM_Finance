import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import TextSM from "../../components/maincomponent/TextSM";
import { STR } from "../../helper/string";
import { COLOR } from "../../helper/theme";
import { BoldTitle, Subtitle } from "../../components/TextsSM";
import { installationhistory, potfoliotab } from "../../helper/json";
import TouchableSM from "../../components/maincomponent/TouchableSM";
import CardsSM from "../../components/CardSM";
import { FlipInEasyX, JumpingTransition } from "react-native-reanimated";
import { color } from "@rneui/base";
import ActiveLoan from "./activeLoan";

const PortfolioScreen = () => {

    const [activetab, setActivetab] = useState("Active Loan")


    return (
        <View style={{ flex: 1, }}>
            <View style={{ margin: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: COLOR.primary, marginTop: 45, padding: 15, borderRadius: 15 }}>
                <View>
                    <TextSM title={STR.MY_POTFOLIO} textStyle={{ color: COLOR.gray[300], marginLeft: 5, marginBottom: 5, fontSize: 16 }} />
                    <BoldTitle title={`${STR.RS} 24,000.00`} textStyle={{ color: COLOR.white }} />
                </View>
                <TextSM title={'18 month 20 days'} viewStyle={{ backgroundColor: COLOR.orrange[100], padding: 5, borderRadius: 10 }} textStyle={{ color: COLOR.white, marginLeft: 5, marginBottom: 5, fontSize: 14 }} />
            </View>


            <View>
                <ScrollView horizontal={true} contentContainerStyle={{ marginTop: "15%", height: 55 }}>
                    {potfoliotab.map((tab, i) => {
                        return (
                            <TouchableSM handlePress={() => setActivetab(tab?.title)} viewStyle={{ paddingHorizontal: 30, height: 45, borderBottomWidth: activetab === tab.title ? 4 : 0.5, borderBottomColor: activetab === tab.title ? COLOR.secondary : COLOR.gray[100] }}>
                                <TextSM title={tab.title} textStyle={{ color: COLOR.black, fontSize: 18, fontWeight: "800" }} />
                            </TouchableSM>
                        )
                    })}

                </ScrollView>
            </View>

            <View style={{ flex: 1 }}>
                {activetab == "Installment History" &&
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                            <TextSM
                                title={STR.DATE}
                                viewStyle={{ width: "20%", alignItems: "center" }} />

                            <TextSM
                                title={STR.INSTALLMENT}
                                viewStyle={{ width: "60%", alignItems: "flex-start" }} />

                            <TouchableSM
                                handlePress={() => console.log("sdsd")}
                                viewStyle={{ width: "20%", alignItems: "center" }}
                            >
                                <TextSM title={STR.FILTER} />
                            </TouchableSM>
                        </View>

                        <View style={{ backgroundColor: COLOR.gray[400] }}>
                            <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
                                <View>
                                    {installationhistory.map((ins, i) => {
                                        const install_task = ins?.ins
                                        const length = install_task?.length

                                        return (
                                            <View
                          
                          style={{ flexDirection: "row", marginTop: 15, alignItems: "center", justifyContent: "center" }}>
                                                <View
                                                    style={{ alignItems: "center", width: "19%", justifyContent: "center" }}>
                                                    <Subtitle
                                                        title={ins.month}
                                                        textStyle={{ color: COLOR.black, fontSize: 15 }}
                                                        viewStyle={{ alignItems: "center", width: "100%" }} />
                                                </View>


                                                <View
                                                    style={{
                                                        width: 1,
                                                        backgroundColor: COLOR.gray[300],
                                                        minHeight: 25,
                                                        height: length === 1 ? "30%" : "80%",
                                                        alignItems: length === 1 ? "center" : "flex-start",
                                                        justifyContent: length === 1 ? "center" : "flex-start"
                                                    }}
                                                >
                                                    {length <= 1 ?
                                                        <View style={{
                                                            width: 10,
                                                            height: 10,
                                                            borderRadius: 10,
                                                            backgroundColor: length > 1 ? COLOR.primary : COLOR.orrange[100],
                                                            marginLeft: -1
                                                        }}>

                                                        </View>
                                                        :
                                                        <View style={{ position: "absolute", height: "100%", justifyContent: "space-between" }}>
                                                            <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: 10,
                                                                backgroundColor: length > 1 ? COLOR.primary : COLOR.orrange[100],
                                                                marginLeft: -5
                                                            }}>

                                                            </View>
                                                            <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: 10,
                                                                backgroundColor: length > 1 ? COLOR.primary : COLOR.orrange[100],
                                                                marginBottom: 0,

                                                                marginLeft: -5
                                                            }}>

                                                            </View>
                                                        </View>
                                                    }

                                                </View>

                                                <View style={{ width: "80%", marginLeft: 10 }}>
                                                    {install_task.map((task, i) => {
                                                        return (
                                                            <CardsSM viewStyle={{
                                                                flexDirection: "row",
                                                                justifyContent: "space-between",
                                                                width: "95%",
                                                                backgroundColor: COLOR.white,
                                                                padding: 12,
                                                                marginBottom: 15
                                                            }} >
                                                                <View>
                                                                    <View style={{ flexDirection: "row" }}>
                                                                        <TextSM title={task.status}
                                                                            textStyle={{
                                                                                color: task.status === "Done" ?
                                                                                    COLOR.blue[100] :
                                                                                    task.status === "In progress" ?
                                                                                        COLOR.orrange[100] :
                                                                                        COLOR.red[100],
                                                                                fontSize: 14,
                                                                                fontWeight: "600"

                                                                            }} />
                                                                        <TextSM
                                                                            title={task.pay_data}
                                                                            textStyle={{ color: COLOR.gray[200], fontSize: 14, marginLeft: 15 }} />
                                                                    </View>

                                                                    <Subtitle
                                                                        title={task.title}
                                                                        textStyle={{ color: COLOR.black, fontSize: 16, fontWeight: "800" }}
                                                                    />

                                                                    <View style={{ flexDirection: "row", marginTop: 15, alignItems: "center", marginLeft: 10 }}>
                                                                        <TextSM
                                                                            title={`${STR.RS}${task.price}`}
                                                                            textStyle={{ color: COLOR.secondary, fontSize: 18, fontWeight: "700" }} />
                                                                        <TextSM
                                                                            title={`${task.payment_type}`}
                                                                            textStyle={{ color: COLOR.primary, fontSize: 14, fontWeight: "700", marginLeft: 15 }} />
                                                                    </View>
                                                                    <TextSM title={`${task.desc}`} textStyle={{ color: COLOR.gray[300], fontSize: 14, fontWeight: "700", marginTop: 10 }} />

                                                                </View>
                                                                <View>
                                                                    <TextSM
                                                                        title={`#${task.payid}`}
                                                                        textStyle={{ color: COLOR.gray[200], fontSize: 14, }} />
                                                                    <TextSM
                                                                        title={`${task.report_person}`}
                                                                        textStyle={{ color: COLOR.black, fontSize: 14, fontWeight: "700", marginTop: 15 }} />
                                                                </View>
                                                            </CardsSM>
                                                        )
                                                    })}
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                }

                {activetab == "Active Loan" &&
                    //  <View><ActiveLoan /></View> 

                    <View style={{ flex: 1, backgroundColor: COLOR.gray[400] }}>
                        <ActiveLoan />
                    </View>
                }

            </View >

        </View >
    )
}

export default PortfolioScreen