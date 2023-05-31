import { Team } from "./Team";
export interface Game {
    home: Team,
    away: Team,
    scoreBoard: ScoreBoard,
    gameNumber: number
}

export interface GameStatus {
    possesion: number,
    gameFinished: boolean,
    gameLog: Record<number, GameAction[]>,
    activeQuarter: number,
    gameClock: string,
    scoreBoard: ScoreBoard,
    shotChartCircles: JSX.Element[]
}

export interface ScoreBoard {
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
    "reb": number,
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
        "PF": number,
        "FG": number,
        "FGM": number,
        "3P": number,
        "3PM": number
    }
}

export interface GameAction {
    shotID?: number,
    action: string,
    gameScore?: string
}

export interface ShotChartFilter {
    filterType: ShotAttempt | "player" | "none",
    playerName?: string
}

export interface ShotData {
    fga: ShotAttempt;
    score: number;
    player: {
        name: string;
        id: number;
    }
}

export interface ReboundData {
    player: {
        name: string;
        id: number;
    }
}
