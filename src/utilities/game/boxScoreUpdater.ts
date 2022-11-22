import { ScoreBoard, ShotData } from "../../interfaces/Game";

export default function updateBoxScore(score: ShotData, scoreBoard: ScoreBoard, team: "home" | "away", timeOfPossession: number) {
    const scoreBoardCopy = { ...scoreBoard };
    const playerID = score.player.id;

    // Update players' minutes (MIN is in seconds)
    Object.keys(scoreBoardCopy).forEach((team) => {
        Object.keys(scoreBoardCopy[team as keyof ScoreBoard].boxScore).forEach(player => {
            scoreBoardCopy[team as keyof ScoreBoard].boxScore[+player].MIN += timeOfPossession;
        });
    });

    // Update Shot Status
    // Update Shot Attempt
    scoreBoardCopy[team].boxScore[playerID].FG++;
    if (score.fga === "threePoint") {
        scoreBoardCopy[team].boxScore[playerID]["3P"]++;
    }

    // Update Shot Made
    if (score.score > 0) {
        scoreBoardCopy[team].boxScore[playerID].FGM++;
    }
    if (score.score === 3) {
        scoreBoardCopy[team].boxScore[playerID]["3PM"]++;
    }

    scoreBoardCopy[team].boxScore[playerID].PTS += score.score;
    return scoreBoardCopy;
}
