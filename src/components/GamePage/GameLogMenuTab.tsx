// Source Imports
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function GamelogMenuTab({ selectedQuarter, setSelectedQuarter }: {
    selectedQuarter: number, setSelectedQuarter: (q: number) => void
}): JSX.Element {

    const tabOptions = ["Total", "Q1", "Q2", "Q3", "Q4", "OT"];

    return(
        <View>
            <Text style={{ textAlign: "center", padding: 5 }}>Game Log</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 5 }}>
                {tabOptions.map((option, idx) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => setSelectedQuarter(idx)} 
                            key={idx} 
                            style={{ borderColor: "black", borderBottomWidth: selectedQuarter === idx ? 1 : 0 }}
                        >
                            <Text>{option}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
