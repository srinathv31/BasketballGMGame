// Source Imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function TeamLogo({ team, logoSize }: {
    team: string,
    logoSize: number
}): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Svg height="100" width="100" style={{ position: "absolute" }}>
                <Circle cx="50" cy="50" r={""+logoSize} fill={team === "NYK" ? "orangered" : "crimson"} />
            </Svg>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={[styles.teamText, { color: "white", fontSize: logoSize/2 }]}>{team}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    teamText: {
        position: "relative",
        textAlign: "center",
        fontWeight: "800",
        color: "crimson",
    },
    details: {
        position: "relative",
        textAlign: "center",
        // fontWeight: "300",
        fontSize: 12,
    }
});

