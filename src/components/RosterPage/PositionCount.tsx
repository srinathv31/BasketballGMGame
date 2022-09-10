// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { Postion } from "../../interfaces/Player";
import { useAppSelector } from "../../redux/hooks";

export default function PositionCount(): JSX.Element {
    const teams = useAppSelector(state => state.teamsTracker.value);
    
    function positionCountCalculation(position: Postion) {
        return Object.values(teams[0].rosters[2022]).reduce((acc, curr) => {
            if (curr.position[0] === position) {
                acc++;
            }
            return acc;
        }, 0);
    }

    const positionCount = [
        { position: "PG", count: positionCountCalculation("PG") },
        { position: "SG", count: positionCountCalculation("SG") },
        { position: "SF", count: positionCountCalculation("SF") },
        { position: "PF", count: positionCountCalculation("PF") },
        { position: "C", count: positionCountCalculation("C") },
    ];

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 2 }}>
            {positionCount.map((item, index) => {
                return (
                    <Text 
                        key={index} 
                        style={{ 
                            fontSize: 15, 
                            color: item.count < 2 ? "crimson" : item.count > 3 ? "orange" : "black" 
                        }}
                    >
                        {item.position}: {item.count}
                    </Text>
                );
            })}
        </View>
    );
}
