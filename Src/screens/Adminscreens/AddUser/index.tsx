import React, { useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import { View } from "react-native";
import { A_COLOR, COLOR } from "../../../helper/theme";
import ImageSM from "../../../components/maincomponent/ImageSM";
import { IMG } from "../../../helper/images";
import TextSM from "../../../components/maincomponent/TextSM";
import { BoldTitle, Subtitle } from "../../../components/TextsSM";
import { Icon } from "@rneui/themed";
import TouchableSM from "../../../components/maincomponent/TouchableSM";
import { adminmenu, group, pendingaprrove_ins } from "../../../helper/json";
import { color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import TextInputSM from "../../../components/maincomponent/TextInputSM";
import DropdownSM from "../../../components/DropdownSM";
import ButtonSM from "../../../components/maincomponent/ButtonSM";

const AddUser = () => {

    const [name, setName] = useState("")
    const [dropvale, setDropvalue] = useState("")
    const [number, setNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()


    const handleregister = () => {
        Alert.alert("Under Production")
    }
    return (
        <View style={{ flex: 1, backgroundColor: A_COLOR.primarylight, alignItems: "center", padding: 25 }}>
            <View style={{ flex: 1, width: "100%" }}>

                <BoldTitle title={"Add user"} textStyle={{ color: A_COLOR.marinblue[100] }} />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        {/* <View style={{ flex: 1, width: "100%" }}> */}
                        <TextInputSM
                            title='Name'
                            setUsername={setName}
                            username={username}
                            animation={true}
                            viewStyle={{ borderBottomColor: COLOR.white, paddingTop: 20 }}
                            textStyle={{ color: A_COLOR.primaryDark }}
                            inputStyle={{ color: A_COLOR.orrange[100], }}
                        />
                        {/* </View> */}

                        <DropdownSM
                            dropvalue={group}
                            value={dropvale}
                            onPress={setDropvalue}
                            inputView={{ borderBottomColor: A_COLOR.blue[100], marginTop: 15, paddingHorizontal: 0 }}
                            textstyle={{ color: A_COLOR.blue[100] }}
                            droptext={{ color: A_COLOR.marinblue[100] }}
                            textview={{ color: A_COLOR.black }}
                        />

                        <TextInputSM
                            title='Number'
                            setUsername={setNumber}
                            username={number}
                            animation={true}
                            viewStyle={{ borderBottomColor: COLOR.white, paddingTop: 20 }}
                            textStyle={{ color: A_COLOR.primaryDark }}
                            inputStyle={{ color: A_COLOR.orrange[100], }}
                        />
                        <TextInputSM
                            title='Username'
                            setUsername={setUsername}
                            username={number}
                            animation={true}
                            viewStyle={{ borderBottomColor: COLOR.white, paddingTop: 20 }}
                            textStyle={{ color: A_COLOR.primaryDark }}
                            inputStyle={{ color: A_COLOR.orrange[100], }}
                        />
                        <TextInputSM
                            title='Password'
                            setUsername={setPassword}
                            username={number}
                            animation={true}
                            viewStyle={{ borderBottomColor: COLOR.white, paddingTop: 20 }}
                            textStyle={{ color: A_COLOR.primaryDark }}
                            inputStyle={{ color: A_COLOR.orrange[100], }}
                        />


                        <ButtonSM
                            title={"Create User"}
                            handlePress={() => handleregister()}
                            viewStyle={{ backgroundColor: A_COLOR.blue[100] }}
                            textStyle={{ color: A_COLOR.white }}
                        />

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AddUser