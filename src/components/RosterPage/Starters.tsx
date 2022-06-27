// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { PlayerObject } from "../../interfaces/Player";
import { generateNewPlayer } from "../../utilities/draft/draftClassGenerator";
import Divider from "../Design/Divider";
import PlayerRosterCard from "./PlayerRosterCard";

export default function Starters(): JSX.Element {

    function generateTestPlayers() {
        const playerList: PlayerObject[] = [];
        for (let i=0;i<5;i++){
            playerList.push(generateNewPlayer(playerList.length));
        }
        return playerList;
    }

    const playerList = generateTestPlayers();

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
