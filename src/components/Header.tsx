// Source Imports
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useAppSelector } from "../redux/hooks";

export default function Header(): JSX.Element {
    const index = useAppSelector(state => state.indexTracker.value);

    const headerTexts = ["PHI", "PHI", "GAME 1 - 2022", "LEAGUE"];

    return(
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "center" }}>
            <Icon 
                name="chevron-back-outline" 
                size={30} 
                color="#FBFAF5" 
                style={{ position: "absolute", left: 5, bottom: 5 }}
                onPress={() => console.log("CHEESE")}
            />
            <Text style={{ padding: 10, fontWeight: "800", color: "#FBFAF5" }}>{headerTexts[index]}</Text>
        </View>
    );
}
