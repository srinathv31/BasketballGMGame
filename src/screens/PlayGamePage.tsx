// Source Imports
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Route, TabView } from "react-native-tab-view";
import BoxScore from "../components/GamePage/BoxScore";
import CourtView from "../components/GamePage/CourtView";
import GameLog from "../components/GamePage/GameLog";
import MenuIndicator from "../components/GamePage/MenuIndicator";
import PlayButton from "../components/GamePage/PlayButton";
import Scoreboard from "../components/GamePage/Scoreboard";
import TeamStats from "../components/GamePage/TeamStats";
import { GameStatus, ShotChartFilter } from "../interfaces/Game";
import { useTeamStore } from "../zustand/teamStore";
import initializeGameLog from "../utilities/game/initalizeGameLog";
import initializeScoreBoard from "../utilities/game/initalizeScoreBoard";
import GameEngine from "../utilities/game/GameEngine";

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
                setGameStatus(currGameStatus => GameEngine({ currGameStatus, team1, team2, setGameRunning, setGameStatus }));
            }, gameSpeed);
            // clear out the interval using the id when unmounting the component
            return () => clearInterval(myInterval);
        }
    }, [gameRunning]);

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
