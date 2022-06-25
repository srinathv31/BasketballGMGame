import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateSpeedRating(position: Postion) {
    const playerSpeedConstraints: Record<Postion, { min: number, max: number, weight: number }> = {
        "PG": { min: 65, max: 99, weight: 0.7 },
        "SG": { min: 65, max: 96, weight: 0.8 },
        "SF": { min: 65, max: 92, weight: 1 },
        "PF": { min: 60, max: 85, weight: 0.6 },
        "C": { min: 50, max: 85, weight: 1 }
    };
    return weightedRandomNumberGenerator(playerSpeedConstraints[position].max, playerSpeedConstraints[position].min, playerSpeedConstraints[position].weight);
}
