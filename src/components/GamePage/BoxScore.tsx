// Source Imports
import React, { SetStateAction, useState } from "react";
import { View,Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScoreBoard, ShotChartFilter } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";
import { isStatSelected, sortBoxScore } from "../../utilities/game/boxScoreSorter";
import BoxScoreHeader from "./BoxScoreHeader";

export type Stats = "MIN" | "PTS" | "REB" | "AST" | "BLK" | "STL" | "TO" | "PF" | "FG" | "FGM" | "3P" | "3PM";

export default function BoxScore({ scoreBoard, teams, setFilter }: {
    scoreBoard: ScoreBoard,
    teams: Team[],
    setFilter: React.Dispatch<SetStateAction<ShotChartFilter>>
}): JSX.Element {
    const [activeTab, setActiveTab] = useState<"home" | "away">("home");
    const [statSort, setStatSort] = useState<Stats>("PTS");

    const currRoster = { 
        "home": Object.values(teams[0].rosters[2022]),
        "away": Object.values(teams[1].rosters[2022])
    };
    const statHeader = ["MIN", "PTS", "REB", "AST", "BLK", "STL", "TO", "PF", "FG-A", "3P-A"];

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

    function renderStats(stat: string, item: string) {
        switch(stat) {
            case "FG":
                return <Text style={styles.boxScoreItem}>{`${scoreBoard[activeTab].boxScore[+item].FGM}-${scoreBoard[activeTab].boxScore[+item].FG}`}</Text>; 
            case "3P":
                return <Text style={styles.boxScoreItem}>{`${scoreBoard[activeTab].boxScore[+item]["3PM"]}-${scoreBoard[activeTab].boxScore[+item]["3P"]}`}</Text>;
            case "FGM":
            case "3PM":
                return null;
            default:
                return <Text style={styles.boxScoreItem}>{scoreBoard[activeTab].boxScore[+item][stat as Stats]}</Text>;
        }
    }

    return(
        <React.Fragment>
            <BoxScoreHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
            
            <ScrollView style={{ flex: 1, padding: 1 }} horizontal={true}>
                <View style={{ flex: 1 }}>
                    <View style={[styles.statHeader, { flexDirection: "row", padding: 5 }]}>
                        <Text style={{ width: 165 }}>{""}</Text>
                        <View style={{ flexDirection: "row" }}>
                            {statHeader.map((label, idx) => {
                                return (
                                    <Text onPress={() => sortBoxScore(label, setStatSort)} key={idx} style={[styles.boxScoreItem, { backgroundColor: isStatSelected(label, statSort) ? "red" : "transparent" }]}>{label}</Text>
                                );
                            })}
                        </View>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                        {Object.keys(scoreBoard[activeTab].boxScore).sort((a, b) => scoreBoard[activeTab].boxScore[+b][statSort] - scoreBoard[activeTab].boxScore[+a][statSort]).map((item, idx) => {
                            const player = currRoster[activeTab].find(player => player.id === +item);
                            return (
                                <TouchableOpacity onPress={() => selectFilter(player?.name)} key={idx} style={{ flexDirection: "row", padding: 5,backgroundColor: idx % 2 ? "#eee" : "transparent" }}>
                                    <Text style={styles.boxScoreNumber}>{`${player?.teamNumber}`}</Text>
                                    <Text style={styles.boxScoreName}>{`${player?.name}`}</Text>
                                    {Object.keys(scoreBoard[activeTab].boxScore[+item]).map((stat, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                {renderStats(stat, item)}
                                            </React.Fragment>
                                        );
                                    })}
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    boxScoreName: {
        width: 135,
        textAlign: "left",
    },
    boxScoreNumber: {
        width: 30,
        textAlign: "center",
        fontStyle: "italic"
    },
    boxScoreItem: {
        width: 40,
        textAlign: "center"
    },
    statHeader: {
        backgroundColor: Colors.lighter,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
});
