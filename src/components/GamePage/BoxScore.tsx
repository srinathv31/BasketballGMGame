// Source Imports
import React from "react";
import { View,Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { GameData } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";

export default function BoxScore({ scoreBoard, team }: {
    scoreBoard: GameData,
    team: Team
}): JSX.Element {
    
    const currRoster = Object.values(team.rosters[2022]);
    const statHeader = ["MIN", "PTS", "REB", "AST", "BLK", "STL", "TO", "PF"];

    return(
        <ScrollView style={{ flex: 1, padding: 5 }} horizontal={true}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", padding: 5 }}>
                    <Text style={{ width: 150 }}>{""}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {statHeader.map((label, idx) => {
                            return (
                                <Text key={idx} style={styles.boxScoreItem}>{label}</Text>
                            );
                        })}
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {Object.keys(scoreBoard.home.boxScore).map((item, idx) => {
                        const player = currRoster.filter(player => player.id === +item);
                        return (
                            <TouchableOpacity key={idx} style={{ flexDirection: "row", padding: 5,backgroundColor: idx % 2 ? "#eee" : "transparent" }}>
                                <Text style={styles.boxScoreNumber}>{`${player[0].teamNumber}`}</Text>
                                <Text style={styles.boxScoreName}>{`${player[0].name}`}</Text>
                                {Object.values(scoreBoard.home.boxScore[+item]).map((stat, index) => {
                                    return (
                                        <Text key={index} style={styles.boxScoreItem}>{stat}</Text>
                                    );
                                })}
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    boxScoreName: {
        width: 120,
        textAlign: "left",
    },
    boxScoreNumber: {
        width: 30,
        textAlign: "center"
    },
    boxScoreItem: {
        width: 40,
        textAlign: "center"
    }
});
