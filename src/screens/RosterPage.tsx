// Source Imports
import React from "react";
import { ScrollView, View } from "react-native";
import Bench from "../components/RosterPage/Bench";
import Overalls from "../components/RosterPage/Overalls";
import PositionCount from "../components/RosterPage/PositionCount";
import Starters from "../components/RosterPage/Starters";
import OptionTabs from "../components/OptionsTab";
import MenuOption from "../interfaces/Menu";

export default function RosterPage(): JSX.Element {
    
    const menuOptionsInitial: MenuOption[] = [
        { name: "ROSTER", selected: true },
        { name: "STAFF", selected: false },
        { name: "STATS", selected: false },
        { name: "SCHEDULE", selected: false },
        { name: "HISTORY", selected: false },
    ];

    return(
        <View style={{ flex: 1, padding: 5 }}>
            <Overalls />
            <OptionTabs menuOptionsInitial={menuOptionsInitial}/>
            <PositionCount />
            <ScrollView>
                <Starters />
                <Bench />
            </ScrollView>
        </View>
    );
}
