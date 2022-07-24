// Source Imports
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function GameLog({ gameLog }: {
    gameLog: string[]
}): JSX.Element {
    return(
        <View style={{ padding: 10, flex: 1 }}>
            <View>
                <Text style={{ textAlign: "center", padding: 5 }}>Game Log</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 5 }}>
                    <Text>Total</Text>
                    <Text>Q1</Text>
                    <Text>Q2</Text>
                    <Text>Q3</Text>
                    <Text>Q4</Text>
                    <Text>OT</Text>
                </View>
            </View>
            <FlatList
                inverted
                data={gameLog}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: "row", flex: 1, backgroundColor: index % 2 ? "lightgrey" : "transparent" }}>
                            <Text style={{ padding: 5, textAlign: "left", width: 60 }}>{[ ...item ].splice(0, 6)}</Text>
                            <Text style={{ padding: 5, textAlign: "center" }}>{[ ...item ].splice(7, item.length)}</Text>
                        </View>
                    );
                }}
            ></FlatList>
        </View>
    );
}
