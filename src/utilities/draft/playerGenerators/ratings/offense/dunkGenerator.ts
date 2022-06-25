import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateDunk(position: Postion) {
    switch (position){
        case "PG":
            return weightedRandomNumberGenerator(97, 35, 1);
        case "SG":
            return weightedRandomNumberGenerator(99, 60, 0.8);
        case "SF":
            return weightedRandomNumberGenerator(99, 50, 0.8);
        case "PF":
            return weightedRandomNumberGenerator(99, 50, 0.8);
        case "C":
            return weightedRandomNumberGenerator(99, 55, 0.7);
    }
}
