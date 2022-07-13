// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { GameData } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";

export default function Scoreboard({ scoreBoard, activeQuarter, gameFinished, gameClock, team1 }: {
    scoreBoard: GameData,
    activeQuarter: number,
    gameFinished: boolean,
    gameClock: string,
    team1: Team
}): JSX.Element {
    return(
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
    );
}
