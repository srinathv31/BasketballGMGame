import { randomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generateBlockRating(height: number) {
    const playerBlockConstraints: Record<number, { min: number, max: number }> = {
        77: { min: 30, max: 67 },
        80: { min: 50, max: 85 },
        82: { min: 50, max: 91 },
        84: { min: 60, max: 96 },
        91: { min: 65, max: 99 }
    };
    let selectedKey = 77;
    Object.keys(playerBlockConstraints).every(heightClass => {
        if (height < +heightClass) {
            selectedKey = +heightClass;
            return false;
        }
        return true;
    });
    return randomNumberGenerator(playerBlockConstraints[selectedKey].max, playerBlockConstraints[selectedKey].min);
}
