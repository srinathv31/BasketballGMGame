// Source Imports
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { PlayerObject } from "../../interfaces/Player";

export default function PlayerRosterCard({ player, index, bench }: {
    player: PlayerObject,
    index: number,
    bench?: boolean
}): JSX.Element {
    return(
        <TouchableOpacity onPress={() => console.log(player.name)}
            style={{ flexDirection: "row", padding: 10, marginVertical: bench ? 0 : 10, backgroundColor: index % 2 ? "#ededed" : "white", alignItems: "center" }} key={index}>
            <Text style={{ marginHorizontal: 5, width: 32 }}>{player.position[0]}</Text>
            <Icon name="person" size={20} style={{ marginHorizontal: 5 }}></Icon>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                <View style={{ alignItems: "center", width: 150  }}>
                    <Text style={styles.details}>{player.name}</Text>
                    <Text style={styles.details}>Age: {player.age}</Text>
                </View>
                <View style={{ alignItems: "center", width: 55  }}>
                    <Text style={styles.details}>$9.5M</Text>
                    <Text style={styles.details}>1 Year</Text>
                </View>
                <View style={{ alignItems: "center", width: 75 }}>
                    <Text style={styles.details}>{player.overall}</Text>
                    <Text style={styles.details}>{player.devTrait}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    teamText: {
        position: "relative",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 30,
        color: "white",
    },
    details: {
        position: "relative",
        textAlign: "center",
        // fontWeight: "300",
        fontSize: 12,
    }
});

