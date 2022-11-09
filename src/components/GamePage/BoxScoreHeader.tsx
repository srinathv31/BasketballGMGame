// Source Imports
import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

export default function BoxScoreHeader({ activeTab, setActiveTab }: {
    activeTab: "home" | "away", setActiveTab: React.Dispatch<React.SetStateAction<"home"|"away">>
}): JSX.Element {
    const tabTransition = useRef(new Animated.Value(75)).current;
    const tabTransition1 = useRef(new Animated.Value(25)).current;
    const inputRange = [25, 75];
    const outputRange = ["25%", "75%"];
    const tabWidth = tabTransition.interpolate({ inputRange, outputRange });
    const tabWidth1 = tabTransition1.interpolate({ inputRange, outputRange });

    const switchTabs = (selected: boolean) => {
        if (selected) {
            return;
        }
        setActiveTab(currTab => {
            if (currTab === "home") {
                return "away";
            }
            return "home";
        });
        Animated.parallel([
            Animated.timing(tabTransition, {
                toValue: JSON.stringify(tabWidth) === JSON.stringify("75%") ? 25 : 75,
                duration: 175,
                useNativeDriver: false
            }),
            Animated.timing(tabTransition1, {
                toValue: JSON.stringify(tabWidth) === JSON.stringify("75%") ? 75 : 25,
                duration: 175,
                useNativeDriver: false
            }),
        ]).start();
    };

    return(
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Animated.View style={[{ width: tabWidth }]}>
                <TouchableOpacity onPress={() => switchTabs(activeTab === "home")} style={{ padding: 5, backgroundColor: "crimson", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", color: "white" }}>PHI</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[{ width: tabWidth1 }]}>
                <TouchableOpacity onPress={() => switchTabs(activeTab === "away")} style={{ padding: 5, backgroundColor: "orangered", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", color: "white" }}>NYK</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}
