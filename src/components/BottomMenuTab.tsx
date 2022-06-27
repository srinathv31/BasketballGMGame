// Source Imports
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BottomMenuTab({ setIndex, index }: {
    setIndex: (i: number) => void, index: number
}): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Icon onPress={() => setIndex(0)}
                name={index === 0 ? "book" : "book-outline"} size={30} color="#900"></Icon>
            <Icon onPress={() => setIndex(1)}
                name={index === 1 ? "person" : "person-outline"} size={30} color="#900"></Icon>
            <Icon onPress={() => setIndex(2)}
                name={index === 2 ? "play" : "play-outline"} size={30} color="#900"></Icon>
            <Icon onPress={() => setIndex(3)}
                name={index === 3 ? "stats-chart" : "stats-chart-outline"} size={30} color="#900"></Icon>
        </View>
    );
}
