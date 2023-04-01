// Source Imports
import React, { SetStateAction, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GameAction, GameStatus } from "../../interfaces/Game";
import GamelogMenuTab from "./GameLogMenuTab";

export default function GameLog({ gameLog, setShotChartCircles }: {
    gameLog: Record<number, GameAction[]>,
    setShotChartCircles: React.Dispatch<SetStateAction<GameStatus>>
}): JSX.Element {
    const [selectedQuarter, setSelectedQuarter] = useState<number>(0);

    function findShotOnCourt(shotID?: number) {
        if (shotID === undefined) {
            return;
        }
        setShotChartCircles(currGameStatus => {
            const currGameStatusCopy = { ...currGameStatus };
            const shotChartCirclesCopy = [ ...currGameStatus.shotChartCircles ];
            const lastElement = shotChartCirclesCopy[shotChartCirclesCopy.length-1];

            if (lastElement.props["active"] === true && lastElement.props["shotID"] === shotID) {
                shotChartCirclesCopy.pop();
                currGameStatusCopy.shotChartCircles = shotChartCirclesCopy;
                return currGameStatusCopy;
            }

            // Remove any duplicates
            const filteredList = shotChartCirclesCopy.filter(shot => shot.props["active"] === false);

            // Duplicate selected shot to layer on top of everything else
            filteredList.push(React.cloneElement(
                currGameStatus.shotChartCircles[shotID],
                { "active": true }
            ));

            currGameStatusCopy.shotChartCircles = filteredList;
            return currGameStatusCopy;
        });
    }

    return(
        <View style={{ padding: 10, flex: 1 }}>
            <GamelogMenuTab selectedQuarter={selectedQuarter} setSelectedQuarter={setSelectedQuarter}/>
            <FlatList
                data={
                    selectedQuarter === 0 
                        ? Object.values(gameLog).map(quarterLog => quarterLog.length > 1 ? quarterLog : []).flat(1)
                        : gameLog[selectedQuarter]
                }
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: "row", flex: 1, padding: 5, backgroundColor: item.action.includes("Quarter") || item.action.includes("Overtime") ? "crimson" : index % 2 ? "#eee" : "transparent" }}>
                            {item.action.includes("Quarter") || item.action.includes("Overtime")
                                ? <Text style={styles.quarterHeader}>{item.action.toLocaleUpperCase()}</Text>
                                : <TouchableOpacity onPress={() => findShotOnCourt(item.shotID)} style={{ flexDirection: "row", width: "60%" }}>
                                    <Text style={{ padding: 5, textAlign: "left", width: 85, fontSize: 12 }}>{[ ...item.action ].splice(0, 11)}</Text>
                                    <Text style={{ padding: 5, textAlign: "center", fontSize: 12 }}>{[ ...item.action ].splice(12, item.action.length)}</Text>
                                    <Text style={{ padding: 5, textAlign: "center", fontSize: 12, fontWeight: "bold" }}>{item.gameScore}</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    );
                }}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    quarterHeader: {
        padding: 5, 
        textAlign: "center", 
        width: "100%", 
        fontWeight: "bold", 
        fontSize: 18,
        color: "white"
    }
});
