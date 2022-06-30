// Source Imports
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function PlayGameButton(): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity style={styles.simButton}>
                <Text style={{ fontWeight: "700", color: "white" }}>SIM GAME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
                <Text style={{ fontWeight: "700", color: "white" }}>PLAY GAME</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    simButton: {
        backgroundColor: "orangered",
        width: 100,
        padding: 10,
        margin: 10,
        alignItems: "center",
    },
    playButton: {
        backgroundColor: "green",
        width: 150,
        padding: 10,
        margin: 10,
        alignItems: "center"
    },
});
