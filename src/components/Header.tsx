// Source Imports
import React, { useContext } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { globalPropsContext } from "../hooks/context/GlobalPropContext";
import { useClientStore } from "../zustand/clientStore";

export default function Header(): JSX.Element {
    const index = useClientStore(state => state.index);
    const { pageView } = useContext(globalPropsContext);

    const headerTexts = ["PHI", "PHI", "GAME 1 - 2022", "LEAGUE"];

    return(
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "center" }}>
            { pageView === "home" 
                && <Icon 
                    name="chevron-back-outline" 
                    size={30} 
                    color="#FBFAF5" 
                    style={{ position: "absolute", left: 5, bottom: 5 }}
                    onPress={() => console.log("CHEESE")}
                />
            }
            <Text style={{ padding: 10, fontWeight: "800", color: "#FBFAF5" }}>{headerTexts[index]}</Text>
            { index === 1 && <Text style={{ padding: 10, fontWeight: "500", color: "#FBFAF5", position: "absolute", right: 5 }}>Edit Lineup</Text>}
        </View>
    );
}
