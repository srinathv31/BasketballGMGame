// Source Imports
import React, { SetStateAction } from "react";
import { View,Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ScoreBoard, ShotChartFilter } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";
import Divider from "../Design/Divider";

export default function BoxScore({ scoreBoard, teams, setFilter }: {
    scoreBoard: ScoreBoard,
    teams: Team[],
    setFilter: React.Dispatch<SetStateAction<ShotChartFilter>>
}): JSX.Element {
    
    const currRoster = Object.values(teams[0].rosters[2022]);
    const currRoster2 = Object.values(teams[1].rosters[2022]);
    const statHeader = ["MIN", "PTS", "REB", "AST", "BLK", "STL", "TO", "PF"];

    function selectFilter(player: string | undefined) {
        if (player === undefined) {
            return;
        }
        setFilter(currFilter => {
            if (currFilter.playerName !== undefined && currFilter.playerName === player) {
                return { filterType: "none" };
            }
            return { filterType: "player", playerName: player };
        });
    }

    return(
        <ScrollView style={{ flex: 1, padding: 5 }} horizontal={true}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", padding: 5 }}>
                    <Text style={{ width: 165 }}>{""}</Text>
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
                        const player = currRoster.find(player => player.id === +item);
                        return (
                            <TouchableOpacity onPress={() => selectFilter(player?.name)} key={idx} style={{ flexDirection: "row", padding: 5,backgroundColor: idx % 2 ? "#eee" : "transparent" }}>
                                <Text style={styles.boxScoreNumber}>{`${player?.teamNumber}`}</Text>
                                <Text style={styles.boxScoreName}>{`${player?.name}`}</Text>
                                {Object.values(scoreBoard.home.boxScore[+item]).map((stat, index) => {
                                    return (
                                        <Text key={index} style={styles.boxScoreItem}>{stat}</Text>
                                    );
                                })}
                            </TouchableOpacity>
                        );
                    })}
                    <Divider length={"full"} />
                    {Object.keys(scoreBoard.away.boxScore).map((item, idx) => {
                        const player = currRoster2.find(player => player.id === +item);
                        return (
                            <TouchableOpacity onPress={() => selectFilter(player?.name)} key={idx} style={{ flexDirection: "row", padding: 5,backgroundColor: idx % 2 ? "#eee" : "transparent" }}>
                                <Text style={styles.boxScoreNumber}>{`${player?.teamNumber}`}</Text>
                                <Text style={styles.boxScoreName}>{`${player?.name}`}</Text>
                                {Object.values(scoreBoard.away.boxScore[+item]).map((stat, index) => {
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
        width: 135,
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
