import React from "react";
import { ScrollView, Text, View } from "react-native";
import PieChart from 'react-native-pie-chart'


import { BoldTitle, Subtitle } from "../../components/TextsSM";
import { COLOR } from "../../helper/theme";

const LoandetailScreen = () => {
    const loan = {
        id: 1,
        title: "Account Loan",
        principal_amt: 20000,
        intrest_rate: "2%",
        intrest_amt: 2000,
        Total_amt: 22000,
        active_date: "10/04/2024",
        ending_date: "10/02/2025",
        installment_month: 11,
        bounce_month: 0,
        pending_months: 8,
        paid_months: 3,
        ins_completed_amt: 14000

    }

    const widthAndHeight = 130
    const series = [loan?.Total_amt, loan?.ins_completed_amt]
    const sliceColor = [COLOR.primary, COLOR.blue[100]]
    return (
        <View style={{ flex: 1, padding: 15 }}>
            <BoldTitle title={loan?.title} viewStyle={{ alignItems: "center", width: "100%" }} textStyle={{ fontWeight: "600", color: COLOR.primary, fontSize: 25 }} />

            <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-evenly", alignItems: "center" }}>

                <View style={{}}>
                    <Subtitle title={`Intrest rate ${loan?.intrest_rate}`} viewStyle={{ marginLeft: "2%" }} />
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, }}>
                        <View style={{ width: 7, height: 7, backgroundColor: COLOR.primary, marginRight: 5 }}></View>
                        <Subtitle title={`Installment amt ${loan?.Total_amt}`} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: 7, height: 7, backgroundColor: COLOR.blue[100], marginRight: 5 }}></View>
                        <Subtitle title={`Paid amt ${loan?.ins_completed_amt}`} />
                    </View>
                </View>

                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.5}
                    coverFill={'#FFF'}
                />


            </View>

            {/* <BoldTitle title={"My loan detail"} viewStyle={{ marginTop: 15 }} textStyle={{ fontSize: 20, color: COLOR.orrange[100] }} /> */}

            <View style={{ flex: 1, marginTop: 45 }}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>


                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Subtitle title={"Total installments : "} textStyle={{ color: COLOR.orrange[100] }} />
                            <Subtitle title={loan?.installment_month} textStyle={{ color: "#641d5e" }} />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Subtitle title={"Paid installments : "} textStyle={{ color: COLOR.orrange[100] }} />
                            <Subtitle title={loan?.paid_months} textStyle={{ color: "#641d5e" }} />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Subtitle title={"Pending installments : "} textStyle={{ color: COLOR.orrange[100] }} />
                            <Subtitle title={loan?.pending_months} textStyle={{ color: "#641d5e" }} />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Subtitle title={"Bounce installments : "} textStyle={{ color: COLOR.orrange[100] }} />
                            <Subtitle title={loan?.bounce_month} textStyle={{ color: "#641d5e" }} />
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Subtitle title={"Starting Date : "} textStyle={{ color: COLOR.orrange[100] }} />
                            <Subtitle title={loan?.active_date} textStyle={{ color: "#641d5e" }} />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Subtitle title={"Ending Month : "} textStyle={{ color: COLOR.orrange[100] }} />
                            <Subtitle title={loan?.ending_date} textStyle={{ color: "#641d5e" }} />
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>



    )
}

export default LoandetailScreen