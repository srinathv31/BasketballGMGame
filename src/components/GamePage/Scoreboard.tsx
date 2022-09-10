// Source Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GameData } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";

export default function Scoreboard({ scoreBoard, activeQuarter, gameFinished, gameClock, gameAction, team1 }: {
    scoreBoard: GameData,
    activeQuarter: number,
    gameFinished: boolean,
    gameClock: string,
    gameAction: string,
    team1: Team
}): JSX.Element {
    return(
        <>
            <View style={{ backgroundColor: "silver", padding: 10, flexDirection: "row", justifyContent: "center" }}>
                <Text style={[styles.speedButton, { backgroundColor: "transparent" }]}>Q:</Text>
                {Object.keys(scoreBoard.home.pointsTotal).map((item, idx) => {
                    return (
                        <Text key={idx} style={[styles.speedButton, { backgroundColor: ""+activeQuarter === item ? "crimson" : "transparent" }]}>{item !== "Total" && item}</Text>
                    );
                })}
            </View>
            <View style={{ padding: 15, borderColor: "black", borderWidth: 1 }}>
                <Text style={{ alignSelf: "center" }}>{gameAction}</Text>
            </View>
            <View style={{ backgroundColor: "silver", padding: 10, flexDirection: "row", justifyContent: "center" }}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ alignSelf: "center", width: 45, textAlign: "center", fontWeight: "700", backgroundColor: "crimson", color: "white", borderWidth: 2 }}>{`${team1.name}`}</Text>
                        {Object.keys(scoreBoard.home.pointsTotal).map((item, index) => {
                            return (
                                <View key={index} style={{ flexDirection: "row" }}>
                                    <Text style={{ alignSelf: "center", width: 30, textAlign: "center", fontWeight: item === "Total" ? "700" : (+item === activeQuarter && !gameFinished) ? "700" : "300" }}>{scoreBoard.home.pointsTotal[item]}</Text>
                                    { index !== 4 && <Text style={{ alignSelf: "center" }}> | </Text>}
                                </View>
                            );
                        })}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ alignSelf: "center", width: 45, textAlign: "center", fontWeight: "700", backgroundColor: "orangered", color: "white", borderWidth: 2 }}>NYK</Text>
                        {Object.keys(scoreBoard.home.pointsTotal).map((item, index) => {
                            return (
                                <View key={index} style={{ flexDirection: "row" }}>
                                    <Text style={{ alignSelf: "center", width: 30, textAlign: "center", fontWeight: item === "Total" ? "700" : (+item === activeQuarter && !gameFinished) ? "700" : "300" }} >{scoreBoard.away.pointsTotal[item]}</Text>
                                    { index !== 4 && <Text style={{ alignSelf: "center" }}> | </Text>}
                                </View>
                            );
                        })}
                    </View>
                </View>
                <Text style={{ alignSelf: "center", marginLeft: 10, width: 50, textAlign: "center", fontWeight: "700", backgroundColor: "crimson", color: "white", borderWidth: 2 }}>{gameClock}</Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    speedButton: {
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: "center"
    }
});
