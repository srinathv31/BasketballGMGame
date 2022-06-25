import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateMidRange(position: Postion) {
    switch (position){
        case "PG":
        case "SG":
        case "SF":
            return weightedRandomNumberGenerator(99, 35, 0.8);
        case "PF":
            return weightedRandomNumberGenerator(95, 35, 0.8);
        case "C":
            return weightedRandomNumberGenerator(95, 25, 1.3);
    }
}
