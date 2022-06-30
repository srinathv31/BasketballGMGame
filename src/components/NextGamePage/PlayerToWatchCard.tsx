// Source Imports
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function PlayerToWatchCard(): JSX.Element {
    return(
        <TouchableOpacity onPress={() => console.log("CHEESE")} style={{ backgroundColor: "#ededed", margin: 10 }}>
            <View style={{ flexDirection: "row", padding: 10, marginVertical: 10, alignItems: "center" }} >
                <Icon name="person" size={30} style={{ marginHorizontal: 5 }}></Icon>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View style={{ alignItems: "center", width: 150  }}>
                        <Text style={styles.details}>{"Joel Embiid"}</Text>
                        <Text style={styles.details}>Age: {28}</Text>
                    </View>
                    <View style={{ alignItems: "center", width: 75 }}>
                        <Text style={styles.details}>{93}</Text>
                        <Text style={styles.details}>{"STAR"}</Text>
                    </View>
                    <Text style={{ marginHorizontal: 5, width: 32 }}>{"PG"}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingBottom: 10 }}>
                <View style={{ alignItems: "center", width: 75 }}>
                    <Text style={styles.details}>{30.1}</Text>
                    <Text style={styles.details}>{"PPG"}</Text>
                </View>
                <View style={{ alignItems: "center", width: 75 }}>
                    <Text style={styles.details}>{6.3}</Text>
                    <Text style={styles.details}>{"APG"}</Text>
                </View>
                <View style={{ alignItems: "center", width: 75 }}>
                    <Text style={styles.details}>{7.3}</Text>
                    <Text style={styles.details}>{"BPG"}</Text>
                </View>
                <View style={{ alignItems: "center", width: 75 }}>
                    <Text style={styles.details}>{1.6}</Text>
                    <Text style={styles.details}>{"SPG"}</Text>
                </View>
            </View>
            <Text style={{ fontStyle: "italic", textAlign: "center", padding: 10 }}>{"I think NYK is going to be easy."}</Text>
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

