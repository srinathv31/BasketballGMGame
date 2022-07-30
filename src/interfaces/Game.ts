import { Team } from "./Team";
export interface Game {
    home: Team,
    away: Team,
    teamScore: number,
    oppScore: number,
    gameNumber: number
}


export interface GameData {
    "home": TeamGameData,
    "away": TeamGameData
}

interface TeamGameData {
    name: string,
    pointsTotal: Record<string, number>,
    "fga": number,
    "fgm": number,
    "tpa": number,
    "tpm": number,
    "biggestLead": number,
    boxScore: BoxScore
}

export type ShotAttempt = "layup" | "dunk" | "close" | "midRange" | "threePoint";

export interface BoxScore {
    [playerID: number]: {
        "MIN": number,
        "PTS": number,
        "REB": number,
        "AST": number,
        "BLK": number,
        "STL": number,
        "TO": number,
        "PF": number
    }
}

export interface GameAction {
    shotID?: number,
    action: string
}
