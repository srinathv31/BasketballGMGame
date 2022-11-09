// Source Imports
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function PlayerLabel({ playerName }: {
    playerName: string
}): JSX.Element {
    return(
        <Text style={styles.filterLabel}>{playerName}</Text>
    );
}

const styles = StyleSheet.create({
    filterLabel: {
        backgroundColor: "white",
        padding: 5,
        margin: 5,
        fontWeight: "bold",
        borderRadius: 5,
        overflow: "hidden",
        alignSelf: "flex-start",
    }
});
