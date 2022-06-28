// Source Imports
import React from "react";
import { View, StyleSheet } from "react-native";
import OptionTabs from "../components/OptionsTab";
import MenuOption from "../interfaces/Menu";

export default function LeaguePage(): JSX.Element {
    
    const menuOptionsInitial: MenuOption[] = [
        { name: "STANDINGS", selected: true },
        { name: "PLAYER STATS", selected: false },
        { name: "TEAM STATS", selected: false },
        { name: "RECORDS", selected: false },
    ];
    
    return(
        <View>
            <OptionTabs menuOptionsInitial={menuOptionsInitial}/>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: "800",
        padding: 15,
        alignSelf: "center"
    },
    watchText: {
        fontSize: 18,
        fontWeight: "800",
        padding: 20,
        margin: 20,
        alignSelf: "center"
    }
});
