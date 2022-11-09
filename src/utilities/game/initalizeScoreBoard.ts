import { BoxScore, ScoreBoard } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";

export default function initializeScoreBoard(team1: Team, team2: Team) {
    const teamBoxScore: BoxScore = {};
    const teamBoxScore2: BoxScore = {};

    Object.values(team1.rosters[2022]).forEach(player => {
        teamBoxScore[player.id] = {
            "MIN": 0,
            "PTS": 0,
            "REB": 0,
            "AST": 0,
            "BLK": 0,
            "STL": 0,
            "TO": 0,
            "PF": 0,
            "FG": 0,
            "FGM": 0,
            "3P": 0,
            "3PM": 0
        };
    });

    Object.values(team2.rosters[2022]).forEach(player => {
        teamBoxScore2[player.id] = {
            "MIN": 0,
            "PTS": 0,
            "REB": 0,
            "AST": 0,
            "BLK": 0,
            "STL": 0,
            "TO": 0,
            "PF": 0,
            "FG": 0,
            "FGM": 0,
            "3P": 0,
            "3PM": 0
        };
    });

    const scoreBoard: ScoreBoard = {
        "home": {
            name: "PHI",
            pointsTotal: {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "Total": 0
            },
            "fga": 0,
            "fgm": 0,
            "tpm": 0,
            "tpa": 0,
            "biggestLead": 0,
            boxScore: teamBoxScore
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
            "fga": 0,
            "fgm": 0,
            "tpm": 0,
            "tpa": 0,
            "biggestLead": 0,
            boxScore: teamBoxScore2
        }
    };

    return scoreBoard;
}
