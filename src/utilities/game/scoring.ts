import { PlayerObject } from "../../interfaces/Player";
import { randomNumberGenerator } from "../randomNumberGenerator";

export function playerShotDeterminator(roster: PlayerObject[]) {
    const randomPlayer = randomNumberGenerator(roster.length);
    const shotType = playerShotAttemptCalculator();
    const score = playerShotSuccessCalculator(roster[randomPlayer], shotType);
    return score;
}

function playerShotAttemptCalculator() {
    const shotTypeList = [3, 2, 1];
    return shotTypeList[randomNumberGenerator(shotTypeList.length)] as 3 | 2 | 1;
}

function playerShotSuccessCalculator(player: PlayerObject, shotAttempt: 3 | 2 | 1) {
    const makeChance = randomNumberGenerator(100);
    const playerShotRating = shotAttempt === 3 ? player.offense.threePoint/2 : player.offense.midRange/2;
    // console.log(`${shotAttempt} - ${makeChance}%`);
    if (makeChance < playerShotRating) {
        return { fga: shotAttempt, score: shotAttempt };
    }
    return { fga: shotAttempt, score: 0 };
}
