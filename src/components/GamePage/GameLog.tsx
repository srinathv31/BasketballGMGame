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
            const lastElement = shotChartCirclesCopy[shotChartCirclesCopy.length-1];

            if (lastElement.props["active"] === true && lastElement.props["shotID"] === shotID) {
                return shotChartCirclesCopy.splice(0, shotChartCirclesCopy.length-1);
            }

            // Remove any duplicates
            const filteredList = shotChartCirclesCopy.filter(shot => shot.props["active"] === false);

            // Duplicate selected shot to layer on top of everything else
            filteredList.push(React.cloneElement(
                currChart[shotID],
                { "active": true }
            ));
            return filteredList;
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
