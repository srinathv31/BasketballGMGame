import { Team } from "./Team";

export interface Game {
    home: Team,
    away: Team,
    teamScore: number,
    oppScore: number,
    gameNumber: number
}
