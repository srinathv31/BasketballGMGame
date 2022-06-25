import { randomNumberGenerator } from "../../../randomNumberGenerator";

export function generateWeight(height: number){
    const playerWeightConstraints: Record<number, { min: number, max: number }> = {
        77: { min: 170, max: 200 },
        80: { min: 180, max: 230 },
        82: { min: 195, max: 235 },
        84: { min: 220, max: 250 },
        91: { min: 245, max: 320 }
    };
    let selectedKey = 77;
    Object.keys(playerWeightConstraints).every(heightClass => {
        if (height < +heightClass) {
            selectedKey = +heightClass;
            return false;
        }
        return true;
    });
    return randomNumberGenerator(playerWeightConstraints[selectedKey].max, playerWeightConstraints[selectedKey].min);
}
