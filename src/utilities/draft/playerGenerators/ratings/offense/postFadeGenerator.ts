import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generatePostFade(height: number) {
    const playerPostConstraints: Record<number, { min: number, max: number, weight: number }> = {
        77: { min: 35, max: 95, weight: 0.8 },
        80: { min: 45, max: 97, weight: 0.8 },
        82: { min: 50, max: 99, weight: 0.8 },
        84: { min: 50, max: 99, weight: 0.8 },
        91: { min: 55, max: 99, weight: 0.8 }
    };
    let selectedKey = 77;
    Object.keys(playerPostConstraints).every(heightClass => {
        if (height < +heightClass) {
            selectedKey = +heightClass;
            return false;
        }
        return true;
    });
    return weightedRandomNumberGenerator(playerPostConstraints[selectedKey].max, playerPostConstraints[selectedKey].min, playerPostConstraints[selectedKey].weight);
}
