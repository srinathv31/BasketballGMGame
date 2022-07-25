// Source Imports
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import GamelogMenuTab from "./GameLogMenuTab";

export default function GameLog({ gameLog }: {
    gameLog: Record<number, string[]>
}): JSX.Element {
    const [selectedQuarter, setSelectedQuarter] = useState<number>(0);

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
                        <View style={{ flexDirection: "row", flex: 1, backgroundColor: item.includes("Quarter") || item.includes("Overtime") ? "#fbded9" : index % 2 ? "lightgrey" : "transparent" }}>
                            {item.includes("Quarter") || item.includes("Overtime")
                                ? <Text style={{ padding: 5, textAlign: "center", width: "100%", fontWeight: "400", fontSize: 18 }}>{item}</Text>
                                : <>
                                    <Text style={{ padding: 5, textAlign: "left", width: 85 }}>{[ ...item ].splice(0, 11)}</Text>
                                    <Text style={{ padding: 5, textAlign: "center" }}>{[ ...item ].splice(12, item.length)}</Text>
                                </>
                            }
                        </View>
                    );
                }}
            ></FlatList>
        </View>
    );
}
