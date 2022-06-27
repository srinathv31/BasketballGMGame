// Source Imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TeamStatusHeader(): JSX.Element {
    
    const capSpace = -2.5;

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: 10 }}>
            <Text style={styles.teamText}>{"PHI"}</Text>
            <Text style={styles.details}>{"52 - 13"}</Text>
            <Text style={[styles.details, { fontWeight: capSpace < 0 ? "800" : "500" }]}>
                {capSpace < 0 ? `Cap Space: ($${capSpace}M)` : `Cap Space: $${capSpace}M`}
            </Text>
        </View>
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
        fontWeight: "500",
        fontSize: 15,
        color: "white",
    }
});
