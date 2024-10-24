import React, { FC } from 'react'
import { View } from 'react-native'
import { activeloan } from '../../helper/json'
import TouchableSM from '../../components/maincomponent/TouchableSM'
import CardsSM from '../../components/CardSM'
import { BoldTitle } from '../../components/TextsSM'
import TextSM from '../../components/maincomponent/TextSM'
import { COLOR } from '../../helper/theme'
import { STR } from '../../helper/string'
import { useNavigation } from '@react-navigation/native'
import { NAV } from '../../helper/nav'

interface IProps {

}


const ActiveLoan: FC<IProps> = ({ }): JSX.Element => {

    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, height: "100%", margin: 15 }}>
            {activeloan.map((loan, i) => {
                return (
                    // <TouchableSM handlePress={() => console.log("DDD")} viewStyle={{ alignItems: "center" }}>
                    <CardsSM viewStyle={{ marginBottom: 15, borderRadius: 0, width: "95%", alignItems: "center", alignSelf: "center" }}>

                        <BoldTitle title={loan.title} textStyle={{ fontSize: 20 }} viewStyle={{}} />
                        {/* <TextSM title={loan.principal_amt} viewStyle={{backgroundColor :"red"}} /> */}
                        <BoldTitle title={`${STR.RS}${loan.principal_amt}`} textStyle={{ color: COLOR.secondary, fontSize: 18, fontWeight: "800", marginTop: 15 }} />

                        <TouchableSM viewStyle={{ backgroundColor: COLOR.secondary, position: "absolute", right: 15, padding: 5, paddingHorizontal: 15 }}
                         handlePress={() => navigation.navigate(NAV.LOAN_DETAIL_NAV)}
                         >
                            <TextSM title={"View"} textStyle={{ fontSize: 15, fontWeight: "600", color: COLOR.white }} />
                        </TouchableSM>
                    </CardsSM>
                    // </TouchableSM>
                )
            })}
        </View>
    )
}

export default ActiveLoan