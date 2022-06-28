import { Game } from "./Game";
import Owner from "./Owner";
import { PlayerObject } from "./Player";
import { Coach } from "./Staff";

export interface Team {
    id: number,
    name: string,
    nameAbv: string,
    conference: "EAST" | "WEST",
    roster: Record<number, PlayerObject[]>,
    staff: Record<number, Coach[]>,
    owner: Owner,
    wins: number,
    losses: number,
    franchiseHistory: Record<number, SeasonResult>,
    playoffStatus: "Lottery Team" | "Playoff Team" | "Contenders",
    schedule: Record<number, Game>,
}

type SeasonOutcome = "Missed Playoffs" | "First Round" | "Second Round" | "Conference Finals" | "Finals" | "Champions";

export interface SeasonResult {
    record: string,
    outcome: SeasonOutcome,
    rank: number
}
