// Source Imports
import React from "react";
import { View, Text } from "react-native";

export default function TeamOptionTabs(): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>ROSTER</Text>
            <Text style={{ fontSize: 12 }}>STAFF</Text>
            <Text style={{ fontSize: 12 }}>STATS</Text>
            <Text style={{ fontSize: 12 }}>SCHEDULE</Text>
            <Text style={{ fontSize: 12 }}>HISTORY</Text>
        </View>
    );
}

