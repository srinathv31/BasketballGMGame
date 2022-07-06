import { randomNumberGenerator } from "../randomNumberGenerator";

export function gameLog(score: number, team: string) {
    
    const twoPointAttempts = [ 
        "Layup is good by", "Mid-range shot by"
    ];

    switch (score) {
        case 0:
            return `Shot missed by ${team}`;
        case 1:
            return `Free throw from ${team}`;
        case 2:
            return `${twoPointAttempts[randomNumberGenerator(twoPointAttempts.length)]} ${team}`;
        case 3:
            return `3 Pointer from ${team}`;
        default:
            return `Shot Missed by ${team}`;
    }
}
