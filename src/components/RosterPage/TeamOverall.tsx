// Source Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function TeamOverall(): JSX.Element {

    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;

    const remainingWaterAmount = 99 - 80;
    const targetAmount = 99;

    const spentAmount = targetAmount - remainingWaterAmount;
    const percentage = (spentAmount / targetAmount) * 100;
    const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

    return(
        <View style={{ flex: 1 }}>
            <View style={styles.graphWrapper}>
                <Svg height="90" width="90" viewBox="0 0 180 180">
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#F1F6F9"
                        fill="transparent"
                        strokeWidth="10"
                    />
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#00703C"
                        fill="transparent"
                        strokeWidth="10"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="butt"
                    />
                </Svg>
                <Text style={styles.text}>{`${Math.floor(percentage)}\nOVR`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    graphWrapper: {
        alignItems: "center",
        justifyContent: "center",
        // margin: 10,
    },
    text: {
        position: "absolute",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 14,
        color: "white",
    },
});

