// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { useTeamStore } from "../../zustand/teamStore";
import Divider from "../Design/Divider";
import PlayerRosterCard from "./PlayerRosterCard";

export default function Bench(): JSX.Element {
    const teamBears = useTeamStore(state => state.teamState);

    const playerList = Object.values(teamBears[0].rosters[2022]);

    return(
        <>
            <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 2, marginBottom: 8 }}>
                <Text>Bench</Text>
                <Divider length="small" color="black"/>
            </View>
            {playerList.map((item, index) => {
                return(
                    index > 4 && <PlayerRosterCard player={item} index={index} bench={true} key={index} />
                );
            })}
        </>
    );
}
