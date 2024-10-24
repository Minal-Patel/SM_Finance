import React from "react";
import { View, Text } from "react-native";
import { BoldTitle, Subtitle } from "../../../components/TextsSM";
import { A_COLOR, COLOR } from "../../../helper/theme";
import { loanjson } from "../../../helper/json";
import TextSM from "../../../components/maincomponent/TextSM";
import TouchableSM from "../../../components/maincomponent/TouchableSM";
import ImageSM from "../../../components/maincomponent/ImageSM";
import { STR } from "../../../helper/string";
import { useNavigation } from "@react-navigation/native";
import { NAV } from "../../../helper/nav";

const Loan = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, padding: 15 }}>

            <View style={{ flexDirection: "row", marginTop: 15, width: "100%", alignItems: "center", justifyContent: "center" }}>
                <View style={{
                    width: 10,
                    height: 10,
                    backgroundColor: A_COLOR.green[100],
                    borderRadius: 1,
                    marginRight: 5
                }} />
                <TextSM title={"Active"} textStyle={{ fontSize: 14 }} />
                <View style={{
                    width: 10,
                    height: 10,
                    backgroundColor: A_COLOR.gray[300],
                    borderRadius: 1,
                    marginLeft: 10,
                    marginRight: 5
                }} />
                <TextSM title={"Completed"} textStyle={{ fontSize: 14 }} />
            </View>

            <BoldTitle title={"Active Loan"} viewStyle={{ marginTop: 25 }} textStyle={{ fontSize: 25, color: A_COLOR.primaryDark, marginBottom: 25 }} />

            {loanjson.map((active, i) => {
                const member = active?.members
                if (active.active === true) {
                    return (
                        <TouchableSM viewStyle={{
                            padding: 15,
                            elevation: 15,
                            width: "100%",
                            marginBottom: 25,
                            shadowColor: "#3f104f",
                            //  height: 75,
                            backgroundColor: A_COLOR.primarylight,
                            borderRadius: 15,
                            alignItems: "center"

                        }} handlePress={() => navigation.navigate(NAV.A_LOANDETAIL , {params : active})} key={active.id} >

                            <Subtitle
                                title={active?.title}
                                textStyle={{ color: A_COLOR.primaryDark }}
                            />

                            <View style={{ flexDirection: "row", width: "100%", marginTop: 5, marginLeft: 25 }}>

                                <Subtitle
                                    title={`${STR.RS} ${active?.principlevalue}`}
                                    textStyle={{  marginRight: 25, color: A_COLOR.blue[100] }}
                                />

                                {member?.map((m, i) => {
                                    return (
                                        <ImageSM
                                            src={m?.img}
                                            viewStyle={{ marginLeft: -8, width: 25, height: 25, borderRadius: 25 / 2 }}
                                            imageStyle={{ width: 25, height: 25, borderRadius: 25 / 2 }}
                                        />
                                    )
                                })}
                            </View>

                            <View style={{
                                width: 15,
                                height: 15,
                                backgroundColor: A_COLOR.green[100],
                                borderRadius: 15 / 2,
                                marginRight: 5,
                                position: "absolute",
                                right: 15,
                                top: "80%"

                            }}></View>
                        </TouchableSM>
                    )
                }

            })}


            <BoldTitle title={"Previous and close Loan"} viewStyle={{ marginTop: 25 }} textStyle={{ fontSize: 25, color: A_COLOR.primaryDark }} />

            {loanjson.map((active, i) => {
                const member = active?.members
                if (active.active === false) {
                    return (
                        <TouchableSM viewStyle={{
                            padding: 15,
                            elevation: 15,
                            width: "100%",
                            marginBottom: 25,
                            shadowColor: "#3f104f",
                            //  height: 75,
                            backgroundColor: A_COLOR.primarylight,
                            borderRadius: 15,
                            alignItems: "center"

                        }} handlePress={() => navigation.navigate(NAV.A_LOANDETAIL , {params : active})} key={active.id} >

                            <Subtitle
                                title={active?.title}
                                textStyle={{ color: A_COLOR.primaryDark }}
                            />

                            <View style={{ flexDirection: "row", width: "100%", marginTop: 5, marginLeft: 25 }}>

                                <Subtitle
                                    title={`${STR.RS} ${active?.principlevalue}`}
                                    textStyle={{ marginRight: 25, color: A_COLOR.blue[100] }}
                                />

                                {member?.map((m, i) => {
                                    return (
                                        <ImageSM
                                            src={m?.img}
                                            viewStyle={{ marginLeft: -8, width: 25, height: 25, borderRadius: 25 / 2 }}
                                            imageStyle={{ width: 25, height: 25, borderRadius: 25 / 2 }}
                                        />
                                    )
                                })}
                            </View>

                            <View style={{
                                width: 15,
                                height: 15,
                                backgroundColor: A_COLOR.gray[300],
                                borderRadius: 15 / 2,
                                marginRight: 5,
                                position: "absolute",
                                right: 15,
                                top: "80%"

                            }}></View>
                        </TouchableSM>
                    )
                }

            })}
        </View>
    )

}

export default Loan;