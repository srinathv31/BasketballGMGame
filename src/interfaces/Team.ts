import { Game } from "./Game";
import Owner from "./Owner";
import { PlayerObject } from "./Player";
import { Coach } from "./Staff";

export interface Team {
    id: number,
    name: string,
    conference: "EAST" | "WEST",
    rosters: Record<number, Roster>,
    salaryBook: Record<number, number>,
    staff: Record<number, Coach[]>,
    owner: Owner,
    overall: number,
    defOverall: number,
    offOverall: number,
    wins: number,
    losses: number,
    franchiseHistory: Record<number, SeasonResult>,
    playoffStatus: "Lottery Team" | "Playoff Team" | "Contenders",
    schedule?: Record<number, Game>,
}

// 1-5 starting positions, > 5 priority in bench rotation
export type Roster = Record<number, PlayerObject>;

type SeasonOutcome = "Missed Playoffs" | "First Round" | "Second Round" | "Conference Finals" | "Finals" | "Champions";

export interface SeasonResult {
    record: string,
    outcome: SeasonOutcome,
    rank: number
}
