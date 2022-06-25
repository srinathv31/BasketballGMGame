import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateStrengthRating(position: Postion) {
    const playerStrengthConstraints: Record<Postion, { min: number, max: number, weight: number }> = {
        "C": { min: 65, max: 99, weight: 0.9 },
        "PF": { min: 65, max: 96, weight: 0.8 },
        "SF": { min: 65, max: 92, weight: 1 },
        "SG": { min: 60, max: 85, weight: 0.6 },
        "PG": { min: 50, max: 85, weight: 1 }
    };
    return weightedRandomNumberGenerator(playerStrengthConstraints[position].max, playerStrengthConstraints[position].min, playerStrengthConstraints[position].weight);
}
