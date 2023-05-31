import React from "react";
import { GameStatus } from "../../interfaces/Game";
// import updateBoxScore from "./boxScoreUpdater";
import { calculateTimeLeft } from "./clock";
import { gameActionGenerator } from "./gameActionGenerator";
import { playerShotDeterminator } from "./scoring";
import { createPointParameters } from "./shotChartGenerator";
import FGACircle from "../../components/GamePage/FGACircle";
import { Team } from "../../interfaces/Team";

export default function GameEngine({ currGameStatus, team1, team2, setGameRunning, setGameStatus }: {
    currGameStatus: GameStatus,
    team1: Team, team2: Team,
    setGameRunning: React.Dispatch<React.SetStateAction<boolean>>,
    setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>
}) {
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
    // gameStatusCopy.scoreBoard = updateBoxScore(score, gameStatusCopy.scoreBoard, teamOfPossession, gameClockObject.timeOfPossession);

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
}

function addScore(teamScore: Record<number, number>, score: number, quarter: number) {
    const teamScoreCopy = { ...teamScore } as Record<string, number>;
    teamScoreCopy[""+quarter] = teamScoreCopy[""+quarter] + score;
    teamScoreCopy["Total"] = teamScoreCopy["Total"] + score;
    return teamScoreCopy;
}
