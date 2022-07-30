// Source Imports
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { GameAction } from "../../interfaces/Game";
import GamelogMenuTab from "./GameLogMenuTab";

export default function GameLog({ gameLog, shotChartCircles }: {
    gameLog: Record<number, GameAction[]>,
    shotChartCircles: JSX.Element[]
}): JSX.Element {
    const [selectedQuarter, setSelectedQuarter] = useState<number>(0);

    function findShotOnCourt(shotID?: number) {
        if (shotID === undefined) {
            return;
        }
        console.log(shotChartCircles[shotID]);
    }

    return(
        <View style={{ padding: 10, flex: 1 }}>
            <GamelogMenuTab selectedQuarter={selectedQuarter} setSelectedQuarter={setSelectedQuarter}/>
            <FlatList
                data={
                    selectedQuarter === 0 
                        ? [...gameLog[1], ...gameLog[2], ...gameLog[3], ...gameLog[4], ...gameLog[5]] 
                        : gameLog[selectedQuarter]
                }
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: "row", flex: 1, backgroundColor: item.action.includes("Quarter") || item.action.includes("Overtime") ? "#fbded9" : index % 2 ? "lightgrey" : "transparent" }}>
                            {item.action.includes("Quarter") || item.action.includes("Overtime")
                                ? <Text style={{ padding: 5, textAlign: "center", width: "100%", fontWeight: "400", fontSize: 18 }}>{item.action}</Text>
                                : <TouchableOpacity onPress={() => findShotOnCourt(item.shotID)} style={{ flexDirection: "row" }}>
                                    <Text style={{ padding: 5, textAlign: "left", width: 85 }}>{[ ...item.action ].splice(0, 11)}</Text>
                                    <Text style={{ padding: 5, textAlign: "center" }}>{[ ...item.action ].splice(12, item.action.length)}</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    );
                }}
            ></FlatList>
        </View>
    );
}
