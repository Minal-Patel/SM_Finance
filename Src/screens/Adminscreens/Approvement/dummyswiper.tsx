import React from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions } from "react-native";
import { PanGestureHandler } from 'react-native-gesture-handler';

const Approvment = () => {


    const dummy = [
        {
            id: 1,
            dgree: 20,
            name: "helll",
            color: "red"
        },
        {
            id: 100,
            dgree: 15,
            name: "helll",
            color: "black"
        },
        {
            id: 200,
            dgree: 10,
            name: "helll",
            color: "blue"
        },
        {
            id: 300,
            dgree: 5,
            name: "helll",
            color: "yellow"
        }
    ]


    const translateX = new Animated.Value(0)
    const translateY = new Animated.Value(0)

    const y = new Animated.Value(0)
    const windowHeight = Dimensions.get('window').height

    const TopOrBottom = y.interpolate({ inputRange: [0, windowHeight / 2 - 1, windowHeight / 2], outputRange: [1, 1, -1], extrapolate: 'clamp' })

    const rotate = Animated.multiply(translateX, TopOrBottom).interpolate({
        inputRange: [-500, 500],
        outputRange: [`-30deg`, `30deg`],
        extrapolate: 'clamp'
    })


    const handlePan = Animated.event(
        [{ nativeEvent: { translationX: translateX, translationY: translateY, y } }], { useNativeDriver: true }
    )

    console.log('%%%%%%%%%%%%', translateX, translateY);

    return (
        <View style={{ flex: 1, backgroundColor: "pink", padding: 100 }}>
            <View style={{ marginTop: 75, alignItems: "center" }}>
                {dummy.map((item, i) => {
                    console.log("$$$$", item?.id + 15);
                    const degree = i + 10
                    return (
                        <>
                            {i === 0 ?
                                <PanGestureHandler onGestureEvent={handlePan} key={i} onEnded={() => console.log("HHHE") }>
                                    <Animated.View key={i}

                                        style={{
                                            height: 350,
                                            width: 350,
                                            padding: 10,
                                            position: 'absolute',
                                            transform: [{ translateX }, { translateY }]
                                        }}>

                                        <View
                                            // onPress={() => console.log("$$$$", item.color)}
                                            style={{
                                                width: 250,
                                                height: 250,
                                                backgroundColor: item.color,
                                                position: "absolute",
                                                borderRadius: 15,
                                                //transform: [{ rotate: i % 2 === 1 ? '-5deg' : '0deg' }]
                                                transform: [{ rotate: `${item?.dgree}deg` }]
                                            }}
                                        >
                                            <Text>{item.name}</Text>
                                        </View>

                                    </Animated.View>
                                </PanGestureHandler>
                                :
                                <View
                                    // onPress={() => console.log("$$$$", item.color)}
                                    style={{
                                        width: 250,
                                        height: 250,
                                        backgroundColor: item.color,
                                        position: "absolute",
                                        zIndex: -1,
                                        borderRadius: 15,
                                        //transform: [{ rotate: i % 2 === 1 ? '-5deg' : '0deg' }]
                                        transform: [{ rotate: `${item?.dgree}deg` }]
                                    }}
                                >
                                    <Text>{item.name}</Text>
                                </View>
                            }
                        </>
                    )
                })}
            </View>
        </View>
    )
}

export default Approvment