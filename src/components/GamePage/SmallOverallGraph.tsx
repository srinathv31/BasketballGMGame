// Source Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function SmallOverallGraph(): JSX.Element {

    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;

    const remainingWaterAmount = 99 - 85;
    const targetAmount = 99;

    const spentAmount = targetAmount - remainingWaterAmount;
    const percentage = (spentAmount / targetAmount) * 100;
    const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

    const overall = Math.floor(percentage) === 100 ? 99 : Math.floor(percentage);

    return(
        <View>
            <View style={styles.graphWrapper}>
                <Svg height="50" width="50" viewBox="0 0 180 180">
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
                <Text style={styles.text}>{`${overall}`}</Text>
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
        fontWeight: "300",
        fontSize: 14,
        color: "black",
    },
});

