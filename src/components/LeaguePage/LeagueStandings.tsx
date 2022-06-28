// Source Imports
import React from "react";
import { ScrollView, View } from "react-native";
import teamNamesList from "../../assets/teamNamesList.json";
import StandingsHeader from "./StandingsHeader";
import TeamCard from "./TeamCard";

export default function LeagueStandings(): JSX.Element {
    return(
        <View style={{ flex: 1 }}>
            <StandingsHeader/>
            <ScrollView style={{ flex: 1 }}>
                {teamNamesList.map((item, index) => {
                    return (
                        <View key={index} style={{ flex: 1 }}>
                            <TeamCard team={item} index={index}/>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
