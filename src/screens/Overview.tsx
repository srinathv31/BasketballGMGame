// Source Imports
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Route, TabView } from "react-native-tab-view";
import BoxScore from "../components/GamePage/BoxScore";
import CourtView from "../components/GamePage/CourtView";
import FGACircle from "../components/GamePage/FGACircle";
import GameLog from "../components/GamePage/GameLog";
import MenuIndicator from "../components/GamePage/MenuIndicator";
import PlayButton from "../components/GamePage/PlayButton";
import Scoreboard from "../components/GamePage/Scoreboard";
import TeamStats from "../components/GamePage/TeamStats";
import { GameAction, GameData, ShotChartFilter } from "../interfaces/Game";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { calculateTimeLeft } from "../utilities/game/clock";
import { gameActionGenerator } from "../utilities/game/gameActionGenerator";
import initializeGameLog from "../utilities/game/initalizeGameLog";
import initializeScoreBoard from "../utilities/game/initalizeScoreBoard";
import { playerShotDeterminator } from "../utilities/game/scoring";
import { createPointParameters } from "../utilities/game/shotChartGenerator";

export default function Overview(): JSX.Element {
    const teams = useAppSelector(state => state.teamsTracker.value);
    const dispatch = useAppDispatch();

    const team1 = teams.find(team => team.name === "PHI")!;

    const [shotChartCircles, setShotChartCircles] = useState<JSX.Element[]>([]);
    
    const [scoreBoard, setScoreBoard] = useState<GameData>(initializeScoreBoard(team1));
    const [filter, setFilter] = useState<ShotChartFilter>({ filterType: "none" });

    const [possession, setPossession] = useState<number>(0);
    const [gameRunning, setGameRunning] = useState<boolean>(false);
    const [gameFinished, setGameFinished] = useState<boolean>(false);
    const [gameSpeed, setGameSpeed] = useState<number>(1000);
    const [gameLog, setGameLog] = useState<Record<number, GameAction[]>>(initializeGameLog());
    const [activeQuarter, setActiveQuarter] = useState<number>(1);
    const [gameClock, setGameClock] = useState<string>("12:00");

    useEffect(() => {
        if (gameRunning) {
            // Remove any Popovers
            setShotChartCircles(currChart => {
                return currChart.filter(shot => shot.props["active"] !== true);
            });
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
                    score.fga === "threePoint" && currTeamScore[homeScore].tpa++;
                    if (score.score !== 0) {
                        currTeamScore[homeScore].fgm++;
                        score.fga === "threePoint" && currTeamScore[homeScore].tpm++;
                    }
                    if (score.score !== 1) {
                        setShotChartCircles(currShotChart => {
                            const pointParameters = createPointParameters(score.fga);
                            return [ 
                                ...currShotChart, 
                                <FGACircle 
                                    key={currShotChart.length} 
                                    pointParameters={pointParameters} 
                                    fgm={score.score !== 0} 
                                    fgtype={score.fga} 
                                    teamColor={homeScore === "home" ? "crimson" : "orangered"} 
                                    home={homeScore === "home"} 
                                    player={score.player} 
                                    active={false} 
                                    shotID={currShotChart.length}
                                    setShotChartCircles={setShotChartCircles}
                                /> ];
                        });
                    }
                    
                    setActiveQuarter(currQuarter => { 
                        // Run score function inside of setActiveQuarter to access activeQuarter value
                        setGameClock(currTime => {
                            // Run Game Log function inside of setGameClock to access gameClock value
                            setShotChartCircles(currShotChart => {
                                setGameLog(currGameLog => {
                                    // Update ScoreBoard
                                    currTeamScore[homeScore].pointsTotal = addScore(currTeamScore[homeScore].pointsTotal, score.score, currQuarter);
                                    const leadOverOpp = currTeamScore[homeScore].pointsTotal["Total"] - currTeamScore[homeScore === "home" ? "away" : "home"].pointsTotal["Total"];
                                    if (leadOverOpp > currTeamScore[homeScore].biggestLead) {
                                        currTeamScore[homeScore].biggestLead = leadOverOpp;
                                    }
                                    // Update Game Log
                                    const currGameLogCopy = { ...currGameLog };
                                    currGameLogCopy[currQuarter] = [
                                        ...currGameLogCopy[currQuarter],
                                        { 
                                            action: `Q${currQuarter} | ${currTime}: ${gameActionGenerator(score.score, currTeamScore[homeScore].name, score.fga, score.player!)}`, 
                                            shotID: currShotChart.length-1,
                                            gameScore: `${currTeamScore["home"].pointsTotal["Total"]} - ${currTeamScore["away"].pointsTotal["Total"]}`
                                        }
                                    ];
                                    return currGameLogCopy;
                                });
                                return currShotChart;
                            });
                            return currTime;
                        });
                        
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

    const [index, setIndex] = useState<number>(0);
    const [routes] = useState([
        { key: "stat", title: "Team Stats" },
        { key: "box", title: "Box Score" },
        { key: "log", title: "Game Log" },

    ]);

    const renderScene = ({ route }: {
        route: Route
    }) => {
        switch (route.key) {
            case "stat":
                return <TeamStats scoreBoard={scoreBoard} setFilter={setFilter} filter={filter}/>;
            case "box":
                return <BoxScore scoreBoard={scoreBoard} team={team1} setFilter={setFilter}/>;
            case "log":
                return <GameLog gameLog={gameLog} setShotChartCircles={setShotChartCircles}/>;
            default:
                return null;
        }
    };
    
    return(
        <>
            <CourtView shotChartCircles={shotChartCircles} filter={filter}/>
            <Scoreboard scoreBoard={scoreBoard} activeQuarter={activeQuarter} gameFinished={gameFinished} gameClock={gameClock} gameAction={gameLog[activeQuarter][gameLog[activeQuarter].length - 1].action} team1={team1} />
            <View style={{ flex: 1.2, height: 30 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    tabBarPosition="bottom"
                    renderTabBar={() => null}
                />
            </View>
            <MenuIndicator index={index} setIndex={setIndex}/>
            <PlayButton setGameRunning={setGameRunning} gameRunning={gameRunning} gameFinished={gameFinished} setGameSpeed={setGameSpeed}/>
        </>
    );
}
