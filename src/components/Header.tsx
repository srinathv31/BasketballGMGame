// Source Imports
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header(): JSX.Element {
    return(
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "center" }}>
            <Icon 
                name="chevron-back-outline" 
                size={30} 
                color="#FBFAF5" 
                style={{ position: "absolute", left: 5, bottom: 5 }}
                onPress={() => console.log("CHEESE")}
            />
            <Text style={{ padding: 10, fontWeight: "800", color: "#FBFAF5",  }}>PHI</Text>
        </View>
    );
}
