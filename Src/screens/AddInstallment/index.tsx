import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import DatePicker from 'react-native-date-picker'


import BackgroudThem from '../../components/ThemeBackSM'
import TextInputSM from '../../components/maincomponent/TextInputSM'
import { InputTitle, Subtitle } from '../../components/TextsSM'
import { COLOR } from '../../helper/theme'
import DropdownSM from '../../components/DropdownSM'
import ImageSM from '../../components/maincomponent/ImageSM'
import { IMG } from '../../helper/images'
import { color } from '@rneui/base'
import { assignmembers, installmenttype, paymentmethos } from '../../helper/json'
import SelectorSM from '../../components/SelectorSM'
import ButtonSM from '../../components/maincomponent/ButtonSM'


const loantype = [
    {
        title: "Regular loan"
    },
    {
        title: "Account loan"
    },
    {
        title: "Modi loan"
    },
]


const AddInstallment = () => {

    const [ins_type, setIns_type] = useState('dd')
    const [payment, setPayment] = useState("300")
    const [desc, setDesc] = useState("")
    const [assignmember, setAssignmember] = useState('')
    const [paymethos, setPaymethod] = useState('')

    const currentdata = new Date()

    console.log("DDDD", currentdata.getDate());


    return (
        <BackgroudThem viewStyle={{}}>
            {/* <View style={{ flex: 1,height:"100%", width: "100%" }}> */}
            <View style={{ padding: 25, flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1, }}>
                    <View style={{ marginTop: 25, width: "100%" }}>

                        {/* ---------------------------------USer detail pre selected ---------------------------------------- */}
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <ImageSM src={IMG.USER} viewStyle={{ width: 75, height: 75, borderRadius: 75 / 2 }} imageStyle={{ borderRadius: 75 / 2, }} />
                                <Subtitle title={"Minal Patel"} textStyle={{ fontSize: 18, color: COLOR.white }} viewStyle={{ marginTop: 15 }} />
                            </View>

                            <Subtitle title={"Group Name"} textStyle={{ fontSize: 20, color: COLOR.secondary }} viewStyle={{ marginTop: 25, marginLeft: 15 }} />
                        </View>

                        {/* ---------------------------------Installment type ---------------------------------------- */}

                        <View style={{ width: "100%", justifyContent: "space-between", marginTop: 15 }}>
                            <InputTitle title={"Installment Type :"} viewStyle={{ marginRight: 10, marginTop: 10, width: "100%" }} textStyle={{ color: COLOR.gray[200] }} />

                            {/* <DropdownSM value={ins_type} onPress={setIns_type} /> */}

                            <View style={{ flex: 1 }}>
                                <DropdownSM value={ins_type} onPress={setIns_type} dropvalue={installmenttype} />

                            </View>

                        </View>



                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between",
                            marginTop: 15
                        }}>
                            {/* ---------------------------------Payment value  ---------------------------------------- */}
                            <View style={{ width: "45%", justifyContent: "space-between", marginTop: 45 }}>


                                <TextInputSM
                                    title='Payment Value'
                                    setUsername={setPayment}
                                    username={payment}
                                    animation={false}
                                    viewStyle={{ borderBottomColor: COLOR.white, paddingBototm: 5 }}
                                    textStyle={{ color: COLOR.gray[200] }}
                                    inputStyle={{ color: COLOR.white, marginTop: 10 }}
                                />


                            </View>

                            {/* --------------------------------- Date  ---------------------------------------- */}


                            <View style={{ width: "45%", justifyContent: "space-between", marginTop: 35, }}>
                                <InputTitle
                                    title={"Installment Date :"}
                                    viewStyle={{ marginRight: 10, marginTop: 10, width: "100%", }}
                                    textStyle={{ color: COLOR.gray[200] }}
                                />

                                <Subtitle
                                    title={`${currentdata.getDate()} / ${currentdata.getMonth()} / ${currentdata.getFullYear()}`}
                                    viewStyle={{ borderBottomWidth: 1, borderBottomColor: COLOR.white, width: "100%" }}
                                    textStyle={{ color: COLOR.white, fontWeight: "400" }} />

                            </View>
                        </View>

                        {/* ---------------------------------Desc type ---------------------------------------- */}

                        <View style={{ width: "100%", justifyContent: "space-between", marginTop: 25 }}>
                            <TextInputSM
                                title='Add Description :'
                                setUsername={setDesc}
                                username={desc}
                                animation={false}
                                viewStyle={{ borderBottomColor: COLOR.white, paddingBototm: 5 }}
                                textStyle={{ color: COLOR.gray[200] }}
                                inputStyle={{ color: COLOR.white, marginTop: 10 }}
                            />


                        </View>


                        {/* ---------------------------------Assign Member ---------------------------------------- */}

                        <View style={{ width: "100%", justifyContent: "space-between", marginTop: 15, zIndex: -1 }}>
                            <InputTitle title={"Assign Member :"} viewStyle={{ marginRight: 10, marginTop: 10, width: "100%" }} textStyle={{ color: COLOR.gray[200] }} />

                            {/* <DropdownSM value={ins_type} onPress={setIns_type} /> */}

                            <View style={{ flex: 1 }}>
                                <DropdownSM
                                    value={assignmember}
                                    onPress={setAssignmember}
                                    dropvalue={assignmembers}
                                />

                            </View>

                        </View>

                        {/* ---------------------------------Payment method ---------------------------------------- */}


                        <View style={{ marginTop: 75, zIndex: -99 }}>

                            <SelectorSM
                                value={paymethos}
                                onpress={setPaymethod}
                                title='Select payment method : ' jsonvalues={paymentmethos}
                            />

                        </View>

                    </View>
                </ScrollView>

                {/* </View> */}
                <ButtonSM title={"Continue"} handlePress={() => console.log('dfdfd')} viewStyle={{ position: "absolute", bottom: 15, alignSelf: "center" }} />
            </View>

        </BackgroudThem>
    );
}

export default AddInstallment