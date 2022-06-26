// Source Imports
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Divider from "../Design/Divider";

export default function Bench(): JSX.Element {

    const bench = [
        { position: "PG", name: "Jonesy" },
        { position: "SG", name: "Jonesy" },
        { position: "SF", name: "Jonesy" },
        { position: "PF", name: "Jonesy" },
        { position: "C", name: "Jonesy" },
        { position: "SF", name: "Jonesy" },
        { position: "PF", name: "Jonesy" },
        { position: "C", name: "Jonesy" },
    ];

    return(
        <>
            <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 2, marginBottom: 8 }}>
                <Text>Bench</Text>
                <Divider length="small" color="black"/>
            </View>
            {bench.map((item, index) => {
                return(
                    <View style={{ flexDirection: "row", padding: 10, backgroundColor: index % 2 ? "#e0e0e0" : "white", alignItems: "center" }} key={index}>
                        <Icon name="mail" size={20}></Icon>
                        <Text style={{ marginHorizontal: 10 }}>{item.position}</Text>
                        <Text>{item.name}</Text>
                    </View>
                );
            })}
        </>
    );
}
