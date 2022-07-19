// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { GameData } from "../../interfaces/Game";

export default function TeamStats({ scoreBoard }: {
    scoreBoard: GameData
}): JSX.Element {
    
    interface StatLabel {
        label: string,
        statKey: "fgm" | "fga" | "tpm" | "tpa" | "biggestLead",
        statKeyAtt?: "fgm" | "fga" | "tpm" | "tpa" | "biggestLead"
    }

    const statsList: StatLabel[] = [ 
        { label: "FIELD GOALS", statKey: "fgm", statKeyAtt: "fga" }, 
        { label: "3 POINTERS", statKey: "tpm", statKeyAtt: "tpa" }, 
        { label: "FREE THROWS", statKey: "fgm", statKeyAtt: "fga" }, 
        { label: "REBOUNDS", statKey: "fgm" }, 
        { label: "TURNOVERS", statKey: "fgm" }, 
        { label: "BIGGEST LEAD", statKey: "biggestLead" } 
    ];

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
                        { item.statKeyAtt !== undefined
                            ? <Text style={{ alignSelf: "center", width: 50 }}>{`${scoreBoard.home[item.statKey]}/${scoreBoard.home[item.statKeyAtt]}`}</Text>
                            : <Text style={{ alignSelf: "center", width: 50 }}>{`${scoreBoard.home[item.statKey]}`}</Text>
                        }
                        <Text style={{ width: 100, textAlign: "center" }}>{item.label}</Text>
                        { item.statKeyAtt !== undefined
                            ? <Text style={{ alignSelf: "center", width: 50, textAlign: "right" }}>{`${scoreBoard.away[item.statKey]}/${scoreBoard.away[item.statKeyAtt]}`}</Text>
                            : <Text style={{ alignSelf: "center", width: 50, textAlign: "right" }}>{`${scoreBoard.away[item.statKey]}`}</Text>
                        }
                    </View>
                );
            })}
        </>
    );
}
