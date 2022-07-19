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
    "biggestLead": number
}

export type ShotAttempt = "layup" | "dunk" | "close" | "midRange" | "threePoint";
