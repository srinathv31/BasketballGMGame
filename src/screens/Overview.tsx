// Source Imports
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import TeamLogo from "../components/GamePage/TeamLogo";
import { Team } from "../interfaces/Team";
import { gameLog } from "../utilities/game/gameLog";
import { randomNumberGenerator } from "../utilities/randomNumberGenerator";
import TeamGenerator from "../utilities/testing/teamGenerator";

export default function Overview(): JSX.Element {
    const [teams, setTeams] = useState<Team[]>(TeamGenerator());
    const [logoSize, setLogoSize] = useState<{ home: number, away: number }>({ home: 45, away: 45 });
    
    const statsList = [
        "FIELD GOALS", "3 POINTERS", "FREE THROWS", "ASSISTS", "REBOUNDS", "STEALS", "BLOCKS", "TURNOVERS"
    ];

    const [scores1, setScores1] = useState<Record<string, number>>({
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "Total": 0
    });
    const [scores2, setScores2] = useState<Record<string, number>>({
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "Total": 0
    });

    function scoreTeam(home: boolean, logoSizeCopy: { home: number, away: number }) {
        // const logoSizeCopy = { ...logoSize };
        if (home) {
            logoSizeCopy.home < 50 ? logoSizeCopy.home++ : console.log("max size");
            logoSizeCopy.away > 20 ? logoSizeCopy.away-- : console.log("min size");
        } else {
            logoSizeCopy.away < 50 ? logoSizeCopy.away++ : console.log("max size");
            logoSizeCopy.home > 20 ? logoSizeCopy.home-- : console.log("min size");
        }
        return logoSizeCopy;
    }

    const [possession, setPossession] = useState<number>(0);
    const [gameRunning, setGameRunning] = useState<boolean>(false);

    const [gameAction, setGameAction] = useState<string>("-");

    useEffect(() => {
        if (gameRunning) {
            // create a interval and get the id
            const myInterval = setInterval(() => {
                let homeScore = false;
                let quarter = 1;
                setPossession(currPossession => {
                    quarter = Math.floor(currPossession/50)+1;
                    if (currPossession === 199) {
                        setGameRunning(false);
                    }
                    currPossession % 2 ? 
                        homeScore = true :
                        homeScore = false;

                    return currPossession + 1;
                });
                homeScore ? 
                    setScores1(currTeamScore => {
                        const score = randomNumberGenerator(4);
                        if (score !== 0) {
                            setLogoSize(currLogoSize => scoreTeam(true, currLogoSize));
                        }
                        setGameAction(gameLog(score, "PHI"));
                        return addScore(currTeamScore, score, quarter);
                    }) :
                    setScores2(currTeamScore => {
                        const score = randomNumberGenerator(4);
                        if (score !== 0) {
                            setLogoSize(currLogoSize => scoreTeam(false, currLogoSize));
                        }
                        setGameAction(gameLog(score, "NYK"));
                        return addScore(currTeamScore, score, quarter);
                    });

            }, 200);
            // clear out the interval using the id when unmounting the component
            return () => clearInterval(myInterval);
        }
    }, [gameRunning]);


    function addScore(teamScore: Record<number, number>, score: number, quarter: number) {
        const teamScoreCopy = { ...teamScore } as Record<string, number>;
        teamScoreCopy[""+quarter] = teamScoreCopy[""+quarter] + score;
        teamScoreCopy["Total"] = teamScoreCopy["Total"] + score;
        console.log(teamScoreCopy);
        return teamScoreCopy;
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
                <Text style={{ alignSelf: "center" }}>{gameAction}</Text>
            </View>
            <View style={{ backgroundColor: "silver", padding: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ alignSelf: "center", width: 40, textAlign: "right" }}>PHI: </Text>
                    {Object.keys(scores1).map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row" }}>
                                <Text style={{ alignSelf: "center", width: 25, textAlign: "center" }}>{scores1[item]}</Text>
                                { index !== 4 && <Text style={{ alignSelf: "center" }}> | </Text>}
                            </View>
                        );
                    })}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ alignSelf: "center", width: 40, textAlign: "right" }}>NYK: </Text>
                    {Object.keys(scores2).map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row" }}>
                                <Text style={{ alignSelf: "center", width: 25, textAlign: "center" }} >{scores2[item]}</Text>
                                { index !== 4 && <Text style={{ alignSelf: "center" }}> | </Text>}
                            </View>
                        );
                    })}
                </View>
            </View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ alignSelf: "center", width: 35 }}>PHI</Text>
                <Text style={{ alignSelf: "center", width: 100, textAlign: "center" }}>STATS</Text>
                <Text style={{ alignSelf: "center", width: 35, textAlign: "right" }}>NYK</Text>
            </View>
            {statsList.map((item, index) => {
                return (
                    <View style={{ paddingHorizontal: 20, marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }} key={index}>
                        <Text style={{ alignSelf: "center", width: 35 }}>{possession}</Text>
                        <Text style={{ width: 100, textAlign: "center" }}>{item}</Text>
                        <Text style={{ alignSelf: "center", width: 35, textAlign: "right" }}>{Math.floor(Math.random() * 30)}</Text>
                    </View>
                );
            })}
            { possession !== 200 ? 
                <View style={{ backgroundColor: "silver", padding: 15 }}>
                    { !gameRunning ? 
                        <Text style={{ alignSelf: "center" }} onPress={() => setGameRunning(true)}>Play</Text> :
                        <Text style={{ alignSelf: "center" }} onPress={() => setGameRunning(false)}>Pause</Text>}
                </View> :
                <View style={{ backgroundColor: "silver", padding: 15 }}>
                    <Text style={{ alignSelf: "center" }} onPress={() => console.log("Next")}>Next</Text>
                </View>
            }
        </>
    );
}
