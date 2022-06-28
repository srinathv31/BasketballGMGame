// Source Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayerToWatchCard from "../components/GamePage/PlayerToWatchCard";
import PlayGameButton from "../components/GamePage/PlayGameButton";
import TeamCard from "../components/GamePage/TeamCard";

export default function GamePage(): JSX.Element {
    return(
        <>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.headerText}>NEXT GAME</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <TeamCard team="PHI" />
                <Text>VS</Text>
                <TeamCard team="NYK" />
            </View>
            <Text style={styles.watchText}>PLAYERS TO WATCH</Text>
            <PlayerToWatchCard />
            <PlayerToWatchCard />
            <PlayGameButton />
        </>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: "800",
        padding: 30,
        margin: 20
    },
    watchText: {
        fontSize: 18,
        fontWeight: "800",
        padding: 20,
        margin: 20,
        alignSelf: "center"
    }
});
