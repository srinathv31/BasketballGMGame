// Source Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SmallOverallGraph from "./SmallOverallGraph";

export default function TeamCard({ team }: {
    team: string
}): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={[styles.teamText, { color: team === "NYK" ? "orangered" : "crimson" }]}>{team}</Text>
                <Text style={styles.details}>52-13 (1)</Text>
            </View>
            <SmallOverallGraph />
        </View>
    );
}

const styles = StyleSheet.create({
    teamText: {
        position: "relative",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 25,
        color: "crimson",
    },
    details: {
        position: "relative",
        textAlign: "center",
        // fontWeight: "300",
        fontSize: 12,
    }
});
