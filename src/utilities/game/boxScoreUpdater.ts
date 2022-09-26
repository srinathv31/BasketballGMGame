import { ScoreBoard } from "../../interfaces/Game";

export default function updateBoxScore(playerID: number, score: number, scoreBoard: ScoreBoard, team: "home" | "away") {
    const scoreBoardCopy = { ...scoreBoard };
    scoreBoardCopy[team].boxScore[playerID].PTS += score;
    return scoreBoardCopy;
}
