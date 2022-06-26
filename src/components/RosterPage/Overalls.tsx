// Source Imports
import React from "react";
import { View, StyleSheet } from "react-native";
import TeamOverall from "./TeamOverall";
import TeamStatusHeader from "./TeamStatusHeader";

export default function Overalls(): JSX.Element {
    return(
        <View style={[styles.card, { backgroundColor: "crimson", padding: 20, borderRadius: 20, justifyContent: "space-evenly" }]}>
            <TeamStatusHeader />
            <View style={{ flexDirection: "row" }}>
                <TeamOverall />
                <TeamOverall />
                <TeamOverall />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 1,
        marginVertical: 10
    },
});
