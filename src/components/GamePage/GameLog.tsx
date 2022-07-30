// Source Imports
import React, { SetStateAction, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { GameAction } from "../../interfaces/Game";
import GamelogMenuTab from "./GameLogMenuTab";

export default function GameLog({ gameLog, setShotChartCircles }: {
    gameLog: Record<number, GameAction[]>,
    setShotChartCircles: React.Dispatch<SetStateAction<JSX.Element[]>>
}): JSX.Element {
    const [selectedQuarter, setSelectedQuarter] = useState<number>(0);

    function findShotOnCourt(shotID?: number) {
        if (shotID === undefined) {
            return;
        }
        setShotChartCircles(currChart => {
            const shotChartCirclesCopy = [ ...currChart ];

            // Hide all other Popovers
            shotChartCirclesCopy.forEach((shot, idx) => {
                shotChartCirclesCopy[idx] = React.cloneElement(
                    shot,
                    { "active": false }
                );
            });

            // Show selected shot Popover
            shotChartCirclesCopy[shotID] = React.cloneElement(
                currChart[shotID],
                { "active": !currChart[shotID].props["active"] }
            );
            return shotChartCirclesCopy;
        });
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
