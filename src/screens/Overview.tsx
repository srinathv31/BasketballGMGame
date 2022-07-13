// Source Imports
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import FGACircle from "../components/GamePage/FGACircle";
import PlayButton from "../components/GamePage/PlayButton";
import ReferencePoints from "../components/GamePage/ReferencePoints";
import Scoreboard from "../components/GamePage/Scoreboard";
import TeamLogo from "../components/GamePage/TeamLogo";
import TeamStats from "../components/GamePage/TeamStats";
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
                    const score = playerShotDeterminator(Object.values(team1.rosters[2022]).filter((item, idx) => idx < 5));
                    currTeamScore[homeScore].fga++;
                    if (score.score !== 0) {
                        setLogoSize(currLogoSize => scoreTeam(homeScore === "home", currLogoSize));
                        currTeamScore[homeScore].fgm++;
                    }
                    if (score.score !== 1) {
                        setShotChartCircles(currShotChart => {
                            return [ ...currShotChart, <FGACircle key={currShotChart.length} fgm={score.score !== 0} fgtype={score.fga} teamColor={homeScore === "home" ? "crimson" : "orangered"} home={homeScore === "home"} /> ];
                        });
                    }
                    setGameAction(gameLog(score.score, currTeamScore[homeScore].name, score.fga, score.player!));
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
                    
                    {/* <ReferencePoints /> */}
                </View>
            </ImageBackground>
            <Scoreboard scoreBoard={scoreBoard} activeQuarter={activeQuarter} gameFinished={gameFinished} gameClock={gameClock} gameAction={gameAction} team1={team1} />
            <TeamStats scoreBoard={scoreBoard}/>
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
