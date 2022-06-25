import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateLayup(position: Postion) {
    switch (position){
        case "PG":
        case "SG":
            return weightedRandomNumberGenerator(99, 45, 0.8);
        case "SF":
            return weightedRandomNumberGenerator(95, 50, 0.8);
        case "PF":
            return weightedRandomNumberGenerator(99, 50, 0.8);
        case "C":
            return weightedRandomNumberGenerator(99, 55, 0.7);
    }
}
