// Source Imports
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function StandingsHeader(): JSX.Element {
    return(
        <TouchableOpacity
            style={{ flexDirection: "row", padding: 10, backgroundColor: "#ededed", alignItems: "center" }}>
            <Text style={{ marginHorizontal: 5, width: 32, fontSize: 12 }}>Team</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                <Text style={styles.details}>W</Text>
                <Text style={styles.details}>L</Text>
                <Text style={styles.details}>Win%</Text>
                <Text style={styles.details}>Last 10</Text>
                <Text style={styles.details}>Streak</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    details: {
        position: "relative",
        textAlign: "center",
        // fontWeight: "300",
        fontSize: 12,
        width: 50
    }
});
