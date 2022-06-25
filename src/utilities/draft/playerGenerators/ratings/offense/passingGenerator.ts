import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generatePassing(position: Postion) {
    switch (position){
        case "PG":
            return weightedRandomNumberGenerator(99, 60, 0.8);
        case "SG":
            return weightedRandomNumberGenerator(95, 55, 0.8);
        case "SF":
            return weightedRandomNumberGenerator(95, 60, 0.8);
        case "PF":
            return weightedRandomNumberGenerator(95, 55, 0.8);
        case "C":
            return weightedRandomNumberGenerator(90, 25, 1);
    }
}
