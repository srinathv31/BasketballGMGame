// Source Imports
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TeamCard({ team }: {
    team: { name: string, conference: string },
}): JSX.Element {
    return(
        <TouchableOpacity onPress={() => console.log(team)}
            style={{ flex: 1, flexDirection: "row", padding: 10, backgroundColor: "white", alignItems: "center" }}>
            <Text style={{ marginHorizontal: 5, width: 32, fontSize: 12 }}>{team.name}</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                <Text style={styles.details}>{23}</Text>
                <Text style={styles.details}>{7}</Text>
                <Text style={styles.details}>69.5%</Text>
                <Text style={styles.details}>8-3</Text>
                <Text style={styles.details}>W 5</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    teamText: {
        position: "relative",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 30,
        color: "white",
    },
    details: {
        position: "relative",
        textAlign: "center",
        // fontWeight: "300",
        fontSize: 12,
        width: 50
    }
});
