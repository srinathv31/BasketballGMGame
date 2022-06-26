// Source Imports
import React from "react";
import { View, Text } from "react-native";

export default function PositionCount(): JSX.Element {
    
    const positionCount = [
        { position: "PG", count: 1 },
        { position: "SG", count: 3 },
        { position: "SF", count: 2 },
        { position: "PF", count: 4 },
        { position: "C", count: 1 },
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
