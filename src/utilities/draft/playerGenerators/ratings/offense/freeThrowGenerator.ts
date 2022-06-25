import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateFreeThrow(position: Postion) {
    switch (position){
        case "PG":
        case "SG":
            return weightedRandomNumberGenerator(99, 45, 0.8);
        case "SF":
            return weightedRandomNumberGenerator(99, 35, 0.8);
        case "PF":
            return weightedRandomNumberGenerator(95, 35, 0.8);
        case "C":
            return weightedRandomNumberGenerator(95, 25, 1);
    }
}
