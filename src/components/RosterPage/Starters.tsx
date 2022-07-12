// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import Divider from "../Design/Divider";
import PlayerRosterCard from "./PlayerRosterCard";

export default function Starters(): JSX.Element {
    const teams = useAppSelector(state => state.teamsTracker.value);

    const playerList = Object.values(teams[0].rosters[2022]);

    return(
        <>
            <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 2, marginBottom: 8 }}>
                <Text>Starters</Text>
                <Divider length="small" color="black"/>
            </View>
            {playerList.map((item, index) => {
                return(
                    <PlayerRosterCard player={item} index={index} key={index}/>
                );
            })}
        </>
    );
}
