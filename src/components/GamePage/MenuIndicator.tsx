// Source Imports
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function MenuIndicator({ index }: {
    index: number
}): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 5 }}>
            <Icon name={index === 0 ? "radio-button-on-outline" : "radio-button-off-outline"} size={12} color={"crimson"} />
            <Icon name={index === 1 ? "radio-button-on-outline" : "radio-button-off-outline"} size={12} color={"crimson"} />
            <Icon name={index === 2 ? "radio-button-on-outline" : "radio-button-off-outline"} size={12} color={"crimson"} />
        </View>
    );
}
