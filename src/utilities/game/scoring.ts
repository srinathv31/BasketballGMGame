import { ShotAttempt } from "../../interfaces/Game";
import { PlayerObject } from "../../interfaces/Player";
import { randomNumberGenerator } from "../randomNumberGenerator";

export function playerShotDeterminator(roster: PlayerObject[]) {
    const randomPlayer = randomNumberGenerator(roster.length);
    const shotType = playerShotAttemptCalculator();
    const score = playerShotSuccessCalculator(roster[randomPlayer], shotType);
    return score;
}

function playerShotAttemptCalculator() {
    const shotTypes: ShotAttempt[] = ["layup", "dunk", "close", "midRange", "threePoint"];
    return shotTypes[randomNumberGenerator(shotTypes.length)];
}

function playerShotSuccessCalculator(player: PlayerObject, shotAttempt: ShotAttempt) {
    const makeChance = randomNumberGenerator(100);
    const playerShotRating = Math.floor(player.offense[shotAttempt]/1.5);
    // console.log(`${player.name}: ${shotAttempt} - ${makeChance} < ${playerShotRating}, Rating: ${player.offense[shotAttempt]}`);
    if (makeChance < playerShotRating) {
        return { fga: shotAttempt, score: shotAttempt === "threePoint" ? 3 : 2, player: { name: player.name, id: player.id } };
    }
    return { fga: shotAttempt, score: 0, player: { name: player.name, id: player.id } };
}
