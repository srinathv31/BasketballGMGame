// Source Imports
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import FGACircle from "../components/GamePage/FGACircle";
import PlayButton from "../components/GamePage/PlayButton";
import TeamLogo from "../components/GamePage/TeamLogo";
import { GameData } from "../interfaces/Game";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { calculateTimeLeft } from "../utilities/game/clock";
import { gameLog } from "../utilities/game/gameLog";
import { playerShotDeterminator } from "../utilities/game/scoring";
import { randomNumberGenerator } from "../utilities/randomNumberGenerator";

export default function Overview(): JSX.Element {
    const teams = useAppSelector(state => state.teamsTracker.value);
    const dispatch = useAppDispatch();

    const team1 = teams.find(team => team.name === "PHI")!;

    const [logoSize, setLogoSize] = useState<{ home: number, away: number }>({ home: 45, away: 45 });
    
    const statsList = [ "FIELD GOALS", "3 POINTERS", "FREE THROWS", "STEALS", "BLOCKS", "TURNOVERS" ];

    const shotChartCirclesInit: JSX.Element[] = [];
    const [shotChartCircles, setShotChartCircles] = useState<JSX.Element[]>(shotChartCirclesInit);

    const [scoreBoard, setScoreBoard] = useState<GameData>({
        "home": {
            name: "PHI",
            pointsTotal: {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "Total": 0
            },
            fga: 0,
            fgm: 0,
            tpm: 0,
            tpa: 0,
        },
        "away": {
            name: "NYK",
            pointsTotal: {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "Total": 0
            },
            fga: 0,
            fgm: 0,
            tpm: 0,
            tpa: 0,
        }
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
    const [gameFinished, setGameFinished] = useState<boolean>(false);
    const [gameSpeed, setGameSpeed] = useState<number>(1000);
    const [gameAction, setGameAction] = useState<string>("-");
    const [activeQuarter, setActiveQuarter] = useState<number>(1);
    const [gameClock, setGameClock] = useState<string>("12:00");

    useEffect(() => {
        if (gameRunning) {
            // create a interval and get the id
            const myInterval = setInterval(() => {
                let homeScore: "home" | "away" = "home";
                setPossession(currPossession => {
                    currPossession % 2 ? 
                        homeScore = "home" :
                        homeScore = "away";

                    return currPossession + 1;
                });
                setGameClock(currTime => {
                    if (currTime === "00:00"){
                        setActiveQuarter(currQuarter => {
                            currQuarter !== 4 ? setGameClock("12:00") : setGameClock("00:00");
                            if (currTime === "00:00" && currQuarter === 4){
                                setGameRunning(false);
                                setGameFinished(true);
                                return currQuarter;
                            }
                            return currQuarter + 1;
                        });
                    }
                    return calculateTimeLeft(currTime);
                });
                setScoreBoard(currTeamScore => {
                    const score = playerShotDeterminator(team1.roster[2022]);
                    currTeamScore[homeScore].fga++;
                    if (score.score !== 0) {
                        setLogoSize(currLogoSize => scoreTeam(homeScore === "home", currLogoSize));
                        currTeamScore[homeScore].fgm++;
                    }
                    if (score.score !== 1) {
                        setShotChartCircles(currShotChart => {
                            return [ ...currShotChart, <FGACircle key={currShotChart.length} fgm={score.score !== 0} fgtype={score.fga} teamColor={homeScore === "home" ? "crimson" : "orangered"} home={homeScore === "home"}/> ];
                        });
                    }
                    setGameAction(gameLog(score.score, currTeamScore[homeScore].name));
                    setActiveQuarter(currQuarter => { 
                        // Run score function inside of setActiveQuarter to access activeQuarter value 
                        currTeamScore[homeScore].pointsTotal = addScore(currTeamScore[homeScore].pointsTotal, score.score, currQuarter);
                        return currQuarter;
                    });
                    return currTeamScore;
                });

            }, gameSpeed);
            // clear out the interval using the id when unmounting the component
            return () => clearInterval(myInterval);
        }
    }, [gameRunning]);

    function addScore(teamScore: Record<number, number>, score: number, quarter: number) {
        const teamScoreCopy = { ...teamScore } as Record<string, number>;
        teamScoreCopy[""+quarter] = teamScoreCopy[""+quarter] + score;
        teamScoreCopy["Total"] = teamScoreCopy["Total"] + score;
        return teamScoreCopy;
    }

    return(
        <>
            <ImageBackground source={require("../assets/gameScreen/basketballCourt.jpg")} style={{ flex: 1 }} >
                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    {/* <TeamLogo team="PHI" logoSize={logoSize.home} />
                    <TeamLogo team="NYK" logoSize={logoSize.away}/> */}
                    {shotChartCircles.map((item) => {
                        return(
                            <React.Fragment key={item.key}>
                                { item }
                            </React.Fragment>
                        );
                    })}
                    {/* <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 165, bottom: 45 }}>
                        <Svg height="100" width="100" style={{ position: "absolute" }}>
                            <Circle cx="50" cy="50" r="5" fill={"crimson"} stroke={"black"} strokeWidth={3}  />
                        </Svg>
                    </View> */}
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: "silver", padding: 10, flexDirection: "row", justifyContent: "center" }}>
                <Text style={[styles.speedButton, { backgroundColor: "transparent" }]}>Q:</Text>
                {Object.keys(scoreBoard.home.pointsTotal).map((item, idx) => {
                    return (
                        <Text key={idx} style={[styles.speedButton, { backgroundColor: ""+activeQuarter === item ? "crimson" : "transparent" }]}>{item !== "Total" && item}</Text>
                    );
                })}
            </View>
            <View style={{ padding: 15, borderColor: "black", borderWidth: 1 }}>
                <Text style={{ alignSelf: "center" }}>{gameAction}</Text>
            </View>
            <View style={{ backgroundColor: "silver", padding: 10, flexDirection: "row", justifyContent: "center" }}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ alignSelf: "center", width: 45, textAlign: "center", fontWeight: "700", backgroundColor: "crimson", color: "white", borderWidth: 2 }}>{`${team1.name}`}</Text>
                        {Object.keys(scoreBoard.home.pointsTotal).map((item, index) => {
                            return (
                                <View key={index} style={{ flexDirection: "row" }}>
                                    <Text style={{ alignSelf: "center", width: 30, textAlign: "center", fontWeight: item === "Total" ? "700" : (+item === activeQuarter && !gameFinished) ? "700" : "300" }}>{scoreBoard.home.pointsTotal[item]}</Text>
                                    { index !== 4 && <Text style={{ alignSelf: "center" }}> | </Text>}
                                </View>
                            );
                        })}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ alignSelf: "center", width: 45, textAlign: "center", fontWeight: "700", backgroundColor: "orangered", color: "white", borderWidth: 2 }}>NYK</Text>
                        {Object.keys(scoreBoard.home.pointsTotal).map((item, index) => {
                            return (
                                <View key={index} style={{ flexDirection: "row" }}>
                                    <Text style={{ alignSelf: "center", width: 30, textAlign: "center", fontWeight: item === "Total" ? "700" : (+item === activeQuarter && !gameFinished) ? "700" : "300" }} >{scoreBoard.away.pointsTotal[item]}</Text>
                                    { index !== 4 && <Text style={{ alignSelf: "center" }}> | </Text>}
                                </View>
                            );
                        })}
                    </View>
                </View>
                <Text style={{ alignSelf: "center", marginLeft: 10, width: 50, textAlign: "center", fontWeight: "700", backgroundColor: "crimson", color: "white", borderWidth: 2 }}>{gameClock}</Text>
            </View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ alignSelf: "center", width: 50, fontWeight: "700" }}>PHI</Text>
                <Text style={{ alignSelf: "center", width: 100, textAlign: "center" }}>STATS</Text>
                <Text style={{ alignSelf: "center", width: 50, textAlign: "right", fontWeight: "700" }}>NYK</Text>
            </View>
            {statsList.map((item, index) => {
                return (
                    <View style={{ paddingHorizontal: 20, marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }} key={index}>
                        <Text style={{ alignSelf: "center", width: 50 }}>{`${scoreBoard.home.fgm}/${scoreBoard.home.fga}`}</Text>
                        <Text style={{ width: 100, textAlign: "center" }}>{item}</Text>
                        <Text style={{ alignSelf: "center", width: 50, textAlign: "right" }}>{`${scoreBoard.away.fgm}/${scoreBoard.away.fga}`}</Text>
                    </View>
                );
            })}
            <PlayButton setGameRunning={setGameRunning} gameRunning={gameRunning} gameFinished={gameFinished} setGameSpeed={setGameSpeed}/>
        </>
    );
}
const styles = StyleSheet.create({
    speedButton: {
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: "center"
    }
});
