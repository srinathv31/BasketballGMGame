// Source Imports
import React, { SetStateAction } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScoreBoard, ShotAttempt, ShotChartFilter } from "../../interfaces/Game";

export default function TeamStats({ scoreBoard, setFilter, filter }: {
    scoreBoard: ScoreBoard,
    setFilter: React.Dispatch<SetStateAction<ShotChartFilter>>, filter: ShotChartFilter
}): JSX.Element {
    
    interface StatLabel {
        label: string,
        statKey: "fgm" | "fga" | "tpm" | "tpa" | "biggestLead",
        statKeyAtt?: "fgm" | "fga" | "tpm" | "tpa" | "biggestLead",
        shotType?: ShotAttempt | "none"
    }

    const statsList: StatLabel[] = [ 
        { label: "FIELD GOALS", statKey: "fgm", statKeyAtt: "fga", shotType: "none" }, 
        { label: "3 POINTERS", statKey: "tpm", statKeyAtt: "tpa", shotType: "threePoint" }, 
        { label: "FREE THROWS", statKey: "fgm", statKeyAtt: "fga" }, 
        { label: "REBOUNDS", statKey: "fgm" }, 
        { label: "TURNOVERS", statKey: "fgm" }, 
        { label: "BIGGEST LEAD", statKey: "biggestLead" } 
    ];

    function selectFilter(shotType: ShotAttempt | "none" | undefined) {
        if (shotType === undefined) {
            return;
        }
        setFilter({
            filterType: shotType
        });
    }

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
                        <TouchableOpacity onPress={() => selectFilter(item.shotType)}>
                            <Text style={{ width: 100, textAlign: "center", backgroundColor: filter.filterType === item.shotType ? "crimson" : "transparent" }}>{item.label}</Text>
                        </TouchableOpacity>
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
