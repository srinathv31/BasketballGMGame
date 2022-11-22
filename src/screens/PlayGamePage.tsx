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
import { GameStatus, ShotChartFilter } from "../interfaces/Game";
import { useTeamStore } from "../zustand/teamStore";
import updateBoxScore from "../utilities/game/boxScoreUpdater";
import { calculateTimeLeft } from "../utilities/game/clock";
import { gameActionGenerator } from "../utilities/game/gameActionGenerator";
import initializeGameLog from "../utilities/game/initalizeGameLog";
import initializeScoreBoard from "../utilities/game/initalizeScoreBoard";
import { playerShotDeterminator } from "../utilities/game/scoring";
import { createPointParameters } from "../utilities/game/shotChartGenerator";

export default function PlayGamePage(): JSX.Element {
    const teamBears = useTeamStore((state) => state.teamState);

    const team1 = teamBears.find(team => team.name === "PHI")!;
    const team2 = teamBears.find(team => team.name === "NYK")!;
    

    const [filter, setFilter] = useState<ShotChartFilter>({ filterType: "none" });

    const [gameRunning, setGameRunning] = useState<boolean>(false);
    const [gameSpeed, setGameSpeed] = useState<number>(1000);

    const [gameStatus, setGameStatus] = useState<GameStatus>({
        possesion: 0,
        gameFinished: false,
        gameLog: initializeGameLog(),
        activeQuarter: 1,
        gameClock: "12:00",
        scoreBoard: initializeScoreBoard(team1, team2),
        shotChartCircles: []
    });

    useEffect(() => {
        if (gameRunning) {
            // Remove any Popovers
            gameStatus.shotChartCircles = gameStatus.shotChartCircles.filter(shot => shot.props["active"] !== true);

            // create a interval and get the id
            const myInterval = setInterval(() => {
                setGameStatus(currGameStatus => {
                    const gameStatusCopy = { ...currGameStatus } as GameStatus;

                    // Calculate Possession
                    let teamOfPossession: "home" | "away" = "home";
                    teamOfPossession = gameStatusCopy.possesion % 2 ? "home" : "away";
                    gameStatusCopy.possesion++;
                    const teamPlayers = teamOfPossession === "home" ? team1 : team2;

                    // Calculate End of Game
                    if (gameStatusCopy.gameClock === "00:00" && gameStatusCopy.activeQuarter === 4) {
                        console.log("END");
                        gameStatusCopy.gameFinished = true;
                        setGameRunning(false);
                        return gameStatusCopy;
                    }

                    // Calculate Time
                    if (gameStatusCopy.gameClock === "00:00") {
                        gameStatusCopy.activeQuarter++;
                        gameStatusCopy.gameClock = "12:00";
                    }
                    const gameClockObject = calculateTimeLeft(gameStatusCopy.gameClock);
                    gameStatusCopy.gameClock = gameClockObject.gameClock;

                    // Calculate Play Type
                    const score = playerShotDeterminator(Object.values(teamPlayers.rosters[2022]).filter((item, idx) => idx < 5));
                    gameStatusCopy.scoreBoard[teamOfPossession].fga++;
                    score.fga === "threePoint" && gameStatusCopy.scoreBoard[teamOfPossession].tpa++;
                    if (score.score !== 0) {
                        gameStatusCopy.scoreBoard[teamOfPossession].fgm++;
                        score.fga === "threePoint" && gameStatusCopy.scoreBoard[teamOfPossession].tpm++;
                    }
                    if (score.score !== 1) {
                        const pointParameters = createPointParameters(score.fga);
                        gameStatusCopy.shotChartCircles.push(
                            <FGACircle 
                                key={gameStatusCopy.shotChartCircles.length} 
                                pointParameters={pointParameters} 
                                fgm={score.score !== 0} 
                                fgtype={score.fga} 
                                teamColor={teamOfPossession === "home" ? "crimson" : "orangered"} 
                                home={teamOfPossession === "home"} 
                                player={score.player.name} 
                                active={false} 
                                shotID={gameStatusCopy.shotChartCircles.length}
                                setShotChartCircles={setGameStatus}
                                gameRunning={true}
                            />
                        );
                    }

                    // Update ScoreBoard
                    gameStatusCopy.scoreBoard[teamOfPossession].pointsTotal = addScore(gameStatusCopy.scoreBoard[teamOfPossession].pointsTotal, score.score, currGameStatus.activeQuarter);
                    const leadOverOpp = gameStatusCopy.scoreBoard[teamOfPossession].pointsTotal["Total"] - gameStatusCopy.scoreBoard[teamOfPossession === "home" ? "away" : "home"].pointsTotal["Total"];
                    if (leadOverOpp > gameStatusCopy.scoreBoard[teamOfPossession].biggestLead) {
                        gameStatusCopy.scoreBoard[teamOfPossession].biggestLead = leadOverOpp;
                    }

                    // Update Box Score
                    gameStatusCopy.scoreBoard = updateBoxScore(score, gameStatusCopy.scoreBoard, teamOfPossession, gameClockObject.timeOfPossession);

                    // Update Game Log
                    gameStatusCopy.gameLog[gameStatusCopy.activeQuarter] = [
                        ...gameStatusCopy.gameLog[gameStatusCopy.activeQuarter],
                        { 
                            action: `Q${gameStatusCopy.activeQuarter} | ${gameStatusCopy.gameClock}: ${gameActionGenerator(score.score, gameStatusCopy.scoreBoard[teamOfPossession].name, score.fga, score.player.name!)}`, 
                            shotID: gameStatusCopy.shotChartCircles.length-1,
                            gameScore: `${gameStatusCopy.scoreBoard["home"].pointsTotal["Total"]} - ${gameStatusCopy.scoreBoard["away"].pointsTotal["Total"]}`
                        }
                    ];

                    return gameStatusCopy;
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
                return <TeamStats scoreBoard={gameStatus.scoreBoard} setFilter={setFilter} filter={filter}/>;
            case "box":
                return <BoxScore scoreBoard={gameStatus.scoreBoard} teams={[team1, team2]} setFilter={setFilter}/>;
            case "log":
                return <GameLog gameLog={gameStatus.gameLog} setShotChartCircles={setGameStatus}/>;
            default:
                return null;
        }
    };

    // Hook to enable/disable viewing shots while game is running
    useEffect(() => {

        // Clear all filters
        setFilter({ filterType: "none" });

        setGameStatus(currGameStatus => {
            const currGameStatusCopy = { ...currGameStatus };
            const shotChartCirclesCopy = [ ...currGameStatus.shotChartCircles ];
    
            // enable/disable all Popovers
            shotChartCirclesCopy.forEach((shot, idx) => {
                shotChartCirclesCopy[idx] = React.cloneElement(
                    shot,
                    { "gameRunning": gameRunning }
                );
            });

            currGameStatusCopy.shotChartCircles = shotChartCirclesCopy;
            return currGameStatusCopy;
        });

    }, [gameRunning]);
    
    return(
        <React.Fragment>
            <CourtView shotChartCircles={gameStatus.shotChartCircles} filter={filter}/>
            <Scoreboard scoreBoard={gameStatus.scoreBoard} activeQuarter={gameStatus.activeQuarter} gameFinished={gameStatus.gameFinished} gameClock={gameStatus.gameClock} gameAction={gameStatus.gameLog[gameStatus.activeQuarter][gameStatus.gameLog[gameStatus.activeQuarter].length - 1].action} team1={team1} />
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
            <PlayButton 
                setGameRunning={setGameRunning} 
                gameRunning={gameRunning} 
                gameFinished={gameStatus.gameFinished} 
                setGameSpeed={setGameSpeed}
                scoreBoard={gameStatus.scoreBoard}
            />
        </React.Fragment>
    );
}
