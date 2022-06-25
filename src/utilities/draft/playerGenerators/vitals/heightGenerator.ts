import { Postion } from "../../../../interfaces/Player";
import { randomNumberGenerator } from "../../../randomNumberGenerator";

export function generateHeight(position: Postion) {
    const playerHeightConstraints: Record<Postion, { min: number, max: number }> = {
        "PG": { min: 72, max: 77 },
        "SG": { min: 73, max: 78 },
        "SF": { min: 77, max: 80 },
        "PF": { min: 80, max: 83 },
        "C": { min: 82, max: 90 }
    };
    const heightAnamolyChance = randomNumberGenerator(100, 0);
    if (heightAnamolyChance > 98) {
        if (position === "PG" && heightAnamolyChance === 99) {
            return 68;
        }
        if (position === "PG" && heightAnamolyChance === 100) {
            return 80;
        }
        if (position === "SF") {
            return 84;
        }
    }
    return randomNumberGenerator(playerHeightConstraints[position].max, playerHeightConstraints[position].min);
}
