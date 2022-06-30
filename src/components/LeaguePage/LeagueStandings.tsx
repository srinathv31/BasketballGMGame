// Source Imports
import React from "react";
import { ScrollView, Text, View } from "react-native";
import teamNamesList from "../../assets/teamNamesList.json";
import StandingsHeader from "./StandingsHeader";
import TeamCard from "./TeamCard";

export default function LeagueStandings(): JSX.Element {
    return(
        <View style={{ flex: 1 }}>
            <StandingsHeader/>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 10, backgroundColor: "#d8dbfd", alignItems: "center" }}>
                    <Text style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "500" }}>EAST</Text>
                </View>
                {teamNamesList.filter(item => item.conference === "EAST").map((item, index) => {
                    return (
                        <View key={index} style={{ flex: 1, borderBottomWidth: index === 9 || index === 5 ? 1 : 0, borderColor: index === 5 ? "black" : "crimson" }}>
                            <TeamCard team={item} />
                        </View>
                    );
                })}
                <View style={{ padding: 10, backgroundColor: "#fbded9", alignItems: "center" }}>
                    <Text style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "500" }}>WEST</Text>
                </View>
                {teamNamesList.filter(item => item.conference === "WEST").map((item, index) => {
                    return (
                        <View 
                            key={index} 
                            style={{ flex: 1, borderBottomWidth: index === 9 || index === 5 ? 1 : 0, borderColor: index === 5 ? "black" : "crimson" }}>
                            <TeamCard team={item} />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
