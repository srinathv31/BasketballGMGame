// Source Imports
import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import TeamLogo from "../components/GamePage/TeamLogo";

export default function Overview(): JSX.Element {
    const [logoSize, setLogoSize] = useState<{ home: number, away: number }>({ home: 50, away: 50 });
    
    const statsList = [
        "FIELD GOALS", "3 POINTERS", "FREE THROWS", "ASSISTS", "REBOUNDS", "STEALS", "BLOCKS", "TURNOVERS"
    ];

    const scores1 = [ 23, 21, 13, 14 ];
    const scores2 = [ 11, 9, 19, 16 ];

    function scoreTeam(home: boolean) {
        const logoSizeCopy = { ...logoSize };
        if (home) {
            logoSizeCopy.home < 50 ? logoSizeCopy.home++ : console.log("max size");
            logoSizeCopy.away > 20 ? logoSizeCopy.away-- : console.log("min size");
        } else {
            logoSizeCopy.away < 50 ? logoSizeCopy.away++ : console.log("max size");
            logoSizeCopy.home > 20 ? logoSizeCopy.home-- : console.log("min size");
        }
        setLogoSize(logoSizeCopy);
    }

    return(
        <>
            <ImageBackground source={require("../assets/gameScreen/court.png")} style={{ flex: 1 }} >
                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <TeamLogo team="PHI" logoSize={logoSize.home} />
                    <TeamLogo team="NYK" logoSize={logoSize.away}/>
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: "silver", padding: 10 }}>
                <Text style={{ alignSelf: "center" }}>Q: 1 2 3 4</Text>
            </View>
            <View style={{ padding: 25, borderColor: "black", borderWidth: 1 }}>
                <Text style={{ alignSelf: "center" }}>3P SHOT: FROM THE CORNER</Text>
            </View>
            <View style={{ backgroundColor: "silver", padding: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ alignSelf: "center", width: 40, textAlign: "right" }}>PHI: </Text>
                    {scores1.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row" }}>
                                <Text style={{ alignSelf: "center", width: 20, textAlign: "center" }}>{item}</Text>
                                { index !== 3 && <Text style={{ alignSelf: "center" }}> | </Text>}
                            </View>
                        );
                    })}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ alignSelf: "center", width: 40, textAlign: "right" }}>NYK: </Text>
                    {scores2.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row" }}>
                                <Text style={{ alignSelf: "center", width: 20, textAlign: "center" }} >{item}</Text>
                                { index !== 3 && <Text style={{ alignSelf: "center" }}> | </Text>}
                            </View>
                        );
                    })}
                </View>
            </View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ alignSelf: "center", width: 35 }} onPress={() => scoreTeam(true)}>PHI</Text>
                <Text style={{ alignSelf: "center", width: 100, textAlign: "center" }}>STATS</Text>
                <Text style={{ alignSelf: "center", width: 35, textAlign: "right" }} onPress={() => scoreTeam(false)}>NYK</Text>
            </View>
            {statsList.map((item, index) => {
                return (
                    <View style={{ paddingHorizontal: 20, marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }} key={index}>
                        <Text style={{ alignSelf: "center", width: 35 }}>{Math.floor(Math.random() * 30)}</Text>
                        <Text style={{ width: 100, textAlign: "center" }}>{item}</Text>
                        <Text style={{ alignSelf: "center", width: 35, textAlign: "right" }}>{Math.floor(Math.random() * 30)}</Text>
                    </View>
                );
            })}
            <View style={{ backgroundColor: "silver", padding: 15 }}>
                <Text style={{ alignSelf: "center" }}>Play</Text>
            </View>
        </>
    );
}
