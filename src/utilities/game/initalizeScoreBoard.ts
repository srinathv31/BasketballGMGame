import { BoxScore, GameData } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";

export default function initializeScoreBoard(team1: Team) {
    const teamBoxScore: BoxScore = {};
    
    Object.values(team1.rosters[2022]).forEach(player => {
        teamBoxScore[player.id] = {
            "MIN": 1,
            "PTS": 1,
            "REB": 1,
            "AST": 1,
            "BLK": 1,
            "STL": 1,
            "TO": 1,
            "PF": 1
        };
    });

    const scoreBoard: GameData = {
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
            boxScore: teamBoxScore
        }
    };

    return scoreBoard;
}
