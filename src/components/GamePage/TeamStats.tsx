// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { GameData } from "../../interfaces/Game";

export default function TeamStats({ scoreBoard }: {
    scoreBoard: GameData
}): JSX.Element {
    
    const statsList = [ "FIELD GOALS", "3 POINTERS", "FREE THROWS", "STEALS", "BLOCKS", "TURNOVERS" ];

    return(
        <>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ alignSelf: "center", width: 50, fontWeight: "700" }}>PHI</Text>
                <Text style={{ alignSelf: "center", width: 100, textAlign: "center" }}>STATS</Text>
                <Text style={{ alignSelf: "center", width: 50, textAlign: "right", fontWeight: "700" }}>NYK</Text>
            </View>
            {statsList.map((item, index) => {
                return (
                    <View style={{ paddingHorizontal: 20, marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }} key={index}>
                        <Text style={{ alignSelf: "center", width: 50 }}>{`${scoreBoard.home.fgm}/${scoreBoard.home.fga}`}</Text>
                        <Text style={{ width: 100, textAlign: "center" }}>{item}</Text>
                        <Text style={{ alignSelf: "center", width: 50, textAlign: "right" }}>{`${scoreBoard.away.fgm}/${scoreBoard.away.fga}`}</Text>
                    </View>
                );
            })}
        </>
    );
}
