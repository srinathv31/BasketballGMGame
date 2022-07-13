import { ShotAttempt } from "../../interfaces/Game";

export function gameLog(score: number, team: string, fga: ShotAttempt, playerName: string) {
    
    if (score === 0) {
        return `Shot missed by ${playerName} - ${team}`;
    }

    switch (fga) {
        case "close":
            return `Hook shot by ${playerName} - ${team}`;
        case "midRange":
            return `Mid-range shot by ${playerName} - ${team}`;
        case "dunk":
            return `Slam from ${playerName} - ${team}`;
        case "layup":
            return `Layup is good by ${playerName} - ${team}`;
        case "threePoint":
            return `Three Pointer from ${playerName} - ${team}`;
        default:
            return `Shot Missed by ${team}`;
    }
}
