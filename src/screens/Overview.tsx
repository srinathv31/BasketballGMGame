// Source Imports
import React from "react";
import { View, Text } from "react-native";
import TeamCard from "../components/NextGamePage/TeamCard";

export default function Overview(): JSX.Element {
    return(
        <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
            <TeamCard team="PHI" />
            <TeamCard team="NYK" />
        </View>
    );
}
