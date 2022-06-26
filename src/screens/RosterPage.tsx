// Source Imports
import React from "react";
import { ScrollView, View } from "react-native";
import Bench from "../components/RosterPage/Bench";
import Overalls from "../components/RosterPage/Overalls";
import PositionCount from "../components/RosterPage/PositionCount";
import Starters from "../components/RosterPage/Starters";
import TeamOptionTabs from "../components/RosterPage/TeamOptionsTab";

export default function RosterPage(): JSX.Element {
    return(
        <View style={{ flex: 1, padding: 5 }}>
            <Overalls />
            <TeamOptionTabs />
            <PositionCount />
            <ScrollView>
                <Starters />
                <Bench />
            </ScrollView>
        </View>
    );
}
