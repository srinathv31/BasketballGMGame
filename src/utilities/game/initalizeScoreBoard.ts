import { BoxScore, GameData } from "../../interfaces/Game";
import { Team } from "../../interfaces/Team";

export default function initializeScoreBoard(team1: Team) {
    const teamBoxScore: BoxScore = {};
    
    Object.values(team1.rosters[2022]).forEach(player => {
        teamBoxScore[player.id] = {
            "MIN": 0,
            "PTS": 0,
            "REB": 0,
            "AST": 0,
            "BLK": 0,
            "STL": 0,
            "TO": 0,
            "PF": 0
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
