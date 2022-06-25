import { Game } from "./Game";
import { PlayerObject } from "./Player";

export interface Team {
    name: string,
    nameAbv: string,
    roster: Record<number, PlayerObject[]>,
    wins: number,
    losses: number,
    franchiseHistory: Record<number, SeasonResult>,
    playoffStatus: "Lottery Team" | "Playoff Team" | "Contenders",
    schedule: Record<number, Game>
}

type SeasonOutcome = "Missed Playoffs" | "First Round" | "Second Round" | "Conference Finals" | "Finals" | "Champions";

interface SeasonResult {
    record: string,
    outcome: SeasonOutcome,
    rank: number
}
