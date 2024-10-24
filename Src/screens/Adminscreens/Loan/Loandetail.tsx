import React, { FC, useEffect, useState } from "react";
import { View, Text, ScrollView, Modal } from "react-native";
import PieChart from 'react-native-pie-chart'

import { BoldTitle } from "../../../components/TextsSM";
import { A_COLOR } from "../../../helper/theme";
import TextSM from "../../../components/maincomponent/TextSM";
import { STR } from "../../../helper/string";
import ImageSM from "../../../components/maincomponent/ImageSM";
import TouchableSM from "../../../components/maincomponent/TouchableSM";
import { IMG } from "../../../helper/images";

interface IProps {
    props?: any,
    route?: any
}
const Loandetail: FC<IProps> = (props): JSX.Element => {

    const [mopen, setMopen] = useState(false)
    const [selected, setSelected] = useState([])

    const [paidper, setPaidamt] = useState(0)
    const [intrestper, setIntrestper] = useState(0)

    const loandetail = props?.route?.params?.params

    const loanholder = loandetail?.members
    const widthAndHeight = 180
    const series = [loandetail?.totalvalue, loandetail?.totalvalue - loandetail?.paidvalue]
    const sliceColor = [A_COLOR.primary, A_COLOR.blue[100]]

    //    var selecteddata = [{}]

    const handleHolder = (mem: object | any) => {
        console.log("$$$$$", mem);

        const paid = mem?.payamount * 100 / mem?.loanvalue
        const int = (mem?.loanvalue - mem?.amount) * 100 / mem?.loanvalue


        const parseval = parseInt(paid)
        const parseint = parseInt(int)

        console.log("####", int, paid, parseval);
        setPaidamt(parseval)
        setIntrestper(parseint)

        //  setPaidamt(mem?.loanvalue - mem?.pendingamt)
        const selecteddata = [
            {
                name: mem?.name,
                totalloan: mem?.loanvalue,
                intrest: mem?.loanvalue - mem?.amount,
                pandingamt: mem?.pendingamt,
                paidamt: mem?.loanvalue - mem?.pendingamt
            },
            {
                key: "Loan value",
                value: mem?.amount
            },
            {
                key: "Intrest Amount",
                value: mem?.loanvalue - mem?.amount
            },
            {
                key: "Total Loan Amount",
                value: mem?.loanvalue
            },
            {
                key: "Pain Amount",
                value: mem?.pendingamt
            },
            {
                key: "Installment number",
                value: mem?.installment
            },
            {
                key: "Compteled Installments",
                value: mem?.paidins
            },
            {
                key: "Pendding Installments",
                value: mem?.pendingins
            },
            {
                key: "Missed Installments",
                value: mem?.missedins
            },
            {
                key: "Starting Date",
                value: mem?.startingdate
            },
            {
                key: "Ending Date",
                value: mem?.lastdate
            },
            {
                key: "Next installment Date",
                value: mem?.nextdate
            },

        ]
        setSelected(selecteddata)

        setMopen(true)
    }

    return (
        <View style={{ flex: 1, padding: 25 }}>

            <BoldTitle title={loandetail?.title} textStyle={{ fontSize: 23, color: A_COLOR.primaryDark }} />
            <View style={{ flexDirection: "row", marginTop: 20, width: "100%", justifyContent: "space-between" }}>

                <View style={{ flexDirection: "row" }}>
                    <TextSM
                        title={`Loan amount : `}
                        textStyle={{
                            fontSize: 16,
                            color: A_COLOR.marinblue[200],
                            fontWeight: "bold",
                            textAlign: "center",
                            alignItems: "center"
                        }}
                    />
                    <TextSM
                        title={`${STR.RS} ${loandetail?.principlevalue}`}
                        textStyle={{
                            fontSize: 18,
                            color: A_COLOR.marinblue[200],
                            fontWeight: "bold",
                            textAlign: "center",
                            alignItems: "center"
                        }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TextSM
                        title={`Intrest : `}
                        textStyle={{
                            fontSize: 16,
                            color: A_COLOR.marinblue[200],
                            fontWeight: "bold",
                            textAlign: "center",
                            alignItems: "center"
                        }}
                    />
                    <TextSM
                        title={`${STR.RS} ${loandetail?.totalvalue - loandetail?.principlevalue}`}
                        textStyle={{
                            fontSize: 18,
                            color: A_COLOR.marinblue[200],
                            fontWeight: "bold",
                            textAlign: "center",
                            alignItems: "center"
                        }}
                    />
                </View>

            </View>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TextSM
                    title={`Total Loan value : `}
                    textStyle={{
                        fontSize: 16,
                        color: A_COLOR.marinblue[100],
                        fontWeight: "bold",
                        textAlign: "center",
                        alignItems: "center"
                    }}
                />
                <TextSM
                    title={`${STR.RS} ${loandetail?.totalvalue}`}
                    textStyle={{
                        fontSize: 18,
                        color: A_COLOR.marinblue[100],
                        fontWeight: "bold",
                        textAlign: "center",
                        alignItems: "center"
                    }}
                />
            </View>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TextSM
                    title={`Remaining value : `}
                    textStyle={{
                        fontSize: 16,
                        color: A_COLOR.marinblue[100],
                        fontWeight: "bold",
                        textAlign: "center",
                        alignItems: "center"
                    }}
                />
                <TextSM
                    title={`${STR.RS} ${loandetail?.totalvalue - loandetail?.paidvalue}`}
                    textStyle={{
                        fontSize: 18,
                        color: A_COLOR.marinblue[100],
                        fontWeight: "bold",
                        textAlign: "center",
                        alignItems: "center"
                    }}
                />
            </View>
            <View style={{ alignItems: "center", marginTop: 25, flexDirection: "row", justifyContent: "space-around" }}>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.5}
                    coverFill={'#FFF'}
                />

                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: A_COLOR.primary, marginRight: 5 }} />
                        <TextSM title={"Total loan"} />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: A_COLOR.blue[100], marginRight: 5 }} />
                        <TextSM title={"Pending loan"} />
                    </View>

                </View>
            </View>
            <View>

            </View>

            <BoldTitle title={"Loan Holder's"} textStyle={{ fontSize: 23, color: A_COLOR.primaryDark, marginTop: 15 }} />

            <View style={{ flexDirection: "row" }}>

                <ScrollView>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", marginRight: 15 }}>
                        {loanholder?.map((mem: any, i: number) => {

                            return (
                                <TouchableSM handlePress={() => handleHolder(mem)}>
                                    <ImageSM src={mem?.img} viewStyle={{ width: 75, height: 75, borderRadius: 75 / 2 }} />
                                    <TextSM title={mem?.name} />
                                </TouchableSM>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>


            <Modal
                visible={mopen}
                transparent={true}

                style={{ height: "100%", alignItems: "center", justifyContent: "center" }}

            >
                <View style={{ backgroundColor: A_COLOR.primarylight, height: "80%", width: "90%", alignSelf: "center", marginTop: "20%", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <ScrollView>
                        <View style={{ flex: 1, alignItems: "center", marginTop: 15, }}>

                            <View style={{ position: "absolute", right: 15 }}>
                                <TouchableSM handlePress={() => setMopen(false)} >
                                    <Text>close</Text>
                                </TouchableSM>
                            </View>
                            <BoldTitle title={selected[0]?.name} viewStyle={{ alignItems: "center", width: "100%", marginTop: 15 }} textStyle={{ textTransform: "capitalize", color: A_COLOR.primaryDark }} />

                            <View style={{ marginTop: 25, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <View style={{ backgroundColor: A_COLOR.green[100], width: 10, height: 10, borderRadius: 1 }}></View>
                                <TextSM title={"Installment"} textStyle={{ color: A_COLOR.marinblue[100], marginLeft: 10 }} />
                                <View style={{ backgroundColor: A_COLOR.marinblue[200], width: 10, height: 10, borderRadius: 1, marginLeft: 10 }}></View>
                                <TextSM title={"Paid amt"} textStyle={{ color: A_COLOR.marinblue[100], marginLeft: 10 }} />
                                <View style={{ backgroundColor: A_COLOR.primary, width: 10, height: 10, borderRadius: 1, marginLeft: 10 }}></View>
                                <TextSM title={"Total amt"} textStyle={{ color: A_COLOR.marinblue[100], marginLeft: 10 }} />
                            </View>
                            <View style={{ marginTop: 45, marginBottom: 75, height: 15, width: "80%", backgroundColor: A_COLOR.primary, borderRadius: 15 }}>
                                <View style={{ width: `${paidper}%`, height: "100%", backgroundColor: A_COLOR.marinblue[200], borderRadius: 15 }}>
                                    <View style={{ width: `${intrestper}%`, height: "100%", backgroundColor: A_COLOR.green[100], borderRadius: 15 }}>
                                    </View>
                                    <TextSM title={selected[0]?.intrest} viewStyle={{ marginTop: 15, position: "absolute", alignSelf: "flex-start" }} />
                                    <TextSM title={selected[0]?.paidamt} viewStyle={{ alignSelf: "flex-end" }} />
                                </View>
                                <TextSM title={selected[0]?.totalloan} viewStyle={{ alignSelf: "flex-end" }} />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                {selected.length > 0 && selected?.map((item, i) => {

                                    if (i > 1)
                                        return (
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    width: "70%",
                                                    marginTop: 18
                                                }}>

                                                <TextSM
                                                    title={`${item?.key}  :`}
                                                    viewStyle={{ alignItems: "flex-start" }}
                                                    textStyle={{
                                                        fontSize: 18,
                                                        fontWeight: "600",
                                                        color: A_COLOR.marinblue[200]
                                                    }}
                                                />
                                                <TextSM 
                                                title={item?.value} 
                                                textStyle={{ 
                                                    fontSize: 18, 
                                                    fontWeight: "bold", 
                                                    color: A_COLOR.violate[100] 
                                                    }} />
                                            </View>
                                        )
                                })}
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

export default Loandetail